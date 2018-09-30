using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

namespace MD.MongoDB.DAL
{
    /// <summary>
    /// Provide CRUD operations with note entities in MongoDB.
    /// </summary>
    public class NoteRepository
    {
        private readonly IGridFSBucket _gridFs;
        private readonly IMongoCollection<Note> _notes;

        public NoteRepository(string connectionString)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("MDMongoDB");
            _gridFs = new GridFSBucket(database);
            _notes = database.GetCollection<Note>("notes");
        }

        /// <summary>
        /// Get all notes from database.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Note>> GetAllAsync()
        {
            var filter = new BsonDocument();
            return await _notes.Find(filter).ToListAsync();
        }

        /// <summary>
        /// Return note model from database by id.
        /// </summary>
        /// <param name="id">Id of the note to be return.</param>
        /// <returns></returns>
        public async Task<Note> GetByIdAsync(string id)
        {
            return await _notes.Find(x => x.Id == id).SingleAsync();
        }

        /// <summary>
        /// Save note to database. Also save photos of the notes separately with GridFS.
        /// </summary>
        /// <param name="note">Note to be saved to database.</param>
        /// <param name="photos">List of photos.</param>
        /// <returns></returns>
        public async Task<Note> CreateNoteAsync(Note note, IEnumerable<Photo> photos = null)
        {
            if (photos != null)
            {
                foreach (var photo in photos)
                {
                    if (!photo.Content.Any()) continue;
                    ObjectId imageId = await _gridFs.UploadFromBytesAsync(photo.FileName, photo.Content);
                    note.FilesIds?.Add(imageId);
                }
            }

            await _notes.InsertOneAsync(note);
            return note;
        }

        public async Task UpdateAsync(Note note)
        {
            var filter = Builders<Note>.Filter.Eq("Id", note.Id);
            await _notes.ReplaceOneAsync(filter, note);
        }
        
        /// <summary>
        /// Delete note and all it's photos from database by note id.
        /// </summary>
        /// <param name="id">id of the note to be deleted.</param>
        /// <returns></returns>
        public async Task<Note> DeleteAsync(string id)
        {
            var noteToDelete = await _notes.Find(x => x.Id == id).SingleAsync();
            await _notes.DeleteOneAsync(x => x.Id == id);
            return noteToDelete;
        }
    }
}
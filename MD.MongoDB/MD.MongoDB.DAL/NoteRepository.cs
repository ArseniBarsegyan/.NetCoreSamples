using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MD.MongoDB.DAL
{
    public class NoteRepository
    {
        private readonly IMongoCollection<Note> _notes;

        public NoteRepository(string connectionString)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("MDMongoDB");
            _notes = database.GetCollection<Note>("notes");
        }

        public async Task<List<Note>> GetAllAsync()
        {
            var filter = new BsonDocument();
            return await _notes.Find(filter).ToListAsync();
        }

        public async Task<Note> GetByIdAsync(string id)
        {
            return await _notes.Find(x => x.Id == id).SingleAsync();
        }

        public async Task<Note> CreateAsync(Note note)
        {
            await _notes.InsertOneAsync(note);
            return note;
        }

        public async Task UpdateAsync(Note note)
        {
            var filter = Builders<Note>.Filter.Eq("Id", note.Id);
            await _notes.ReplaceOneAsync(filter, note);
        }
        
        public async Task DeleteAsync(string id)
        {
            await _notes.DeleteOneAsync(x => x.Id == id);
        }
    }
}
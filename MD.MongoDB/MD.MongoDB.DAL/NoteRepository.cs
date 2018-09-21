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

        public async Task<List<Note>> GetAll()
        {
            var filter = new BsonDocument();
            return await _notes.Find(filter).ToListAsync();
        }
    }
}
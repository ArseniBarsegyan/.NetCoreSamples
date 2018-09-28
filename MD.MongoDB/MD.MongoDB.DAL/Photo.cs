using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MD.MongoDB.DAL
{
    /// <summary>
    /// Photo model that is stored in database.
    /// </summary>
    public class Photo
    {
        /// <summary>
        /// Unique identifier of the note.
        /// </summary>
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        /// <summary>
        /// File content as byte array.
        /// </summary>
        public byte[] Content { get; set; }

        /// <summary>
        /// Saved filename.
        /// </summary>
        public string FileName { get; set; }
    }
}
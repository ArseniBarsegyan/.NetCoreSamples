using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MD.MongoDB.DAL
{
    /// <summary>
    /// Note model that is stored in database.
    /// </summary>
    public class Note
    {
        /// <summary>
        /// Unique identifier of the note.
        /// </summary>
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        /// <summary>
        /// Time of note creation.
        /// </summary>
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime Date { get; set; }

        /// <summary>
        /// Text of the note.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// List of all files ids that are linked to note.
        /// </summary>
        public List<ObjectId> FilesIds { get; set; }
    }
}
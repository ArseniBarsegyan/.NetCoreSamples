using System;
using System.Collections.Generic;

namespace MD.MongoDB.BLL.Dto
{
    /// <summary>
    /// Note DTO.
    /// </summary>
    public class NoteDto
    {
        public NoteDto()
        {
            Photos = new List<PhotoDto>();
        }
        
        /// <summary>
        /// Note id.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Note description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Note creation date.
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        /// Photos of the note.
        /// </summary>
        public IEnumerable<PhotoDto> Photos { get; set; } 
    }
}
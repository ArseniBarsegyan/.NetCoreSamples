using System.Collections.Generic;
using System.Threading.Tasks;
using MD.MongoDB.BLL.Dto;

namespace MD.MongoDB.BLL.Services
{
    /// <summary>
    /// Provide CRUD operations with notes.
    /// </summary>
    public interface INotesService
    {
        /// <summary>
        /// Get all notes from database.
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<NoteDto>> GetAllNotesAsync();

        /// <summary>
        /// Save note to database.
        /// </summary>
        /// <param name="noteDto">NoteDto to be saved.</param>
        /// <returns></returns>
        Task<NoteDto> CreateAsync(NoteDto noteDto);

        /// <summary>
        /// Delete note from database by id.
        /// </summary>
        /// <param name="id">Id of the note to be deleted.</param>
        /// <returns></returns>
        Task DeleteNoteAsync(string id);
    }
}
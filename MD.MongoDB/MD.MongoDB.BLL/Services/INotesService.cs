using System.Collections.Generic;
using System.Threading.Tasks;
using MD.MongoDB.BLL.Dto;

namespace MD.MongoDB.BLL.Services
{
    public interface INotesService
    {
        Task<IEnumerable<NoteDto>> GetAllNotesAsync();
        Task<NoteDto> CreateAsync(NoteDto noteDto);
        Task DeleteNoteAsync(string id);
    }
}
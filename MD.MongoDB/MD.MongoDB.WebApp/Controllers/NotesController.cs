using System.Collections.Generic;
using System.Threading.Tasks;
using MD.MongoDB.DAL;
using Microsoft.AspNetCore.Mvc;

namespace MD.MongoDB.WebApp.Controllers
{
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private readonly NoteRepository _repository;

        public NotesController()
        {
            _repository = new NoteRepository("mongodb://localhost:27017");
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<Note>> AllNotes()
        {
            return await _repository.GetAllAsync();
        }
    }
}
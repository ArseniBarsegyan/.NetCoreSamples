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

        [HttpPost("[action]")]
        public async Task<IActionResult> Create([FromBody] Note note)
        {
            await _repository.CreateAsync(note);
            return Ok(note);
        }

        [HttpPut("[action]/{id}")]
        public async Task Update(string id, [FromBody]Note note)
        {
            await _repository.UpdateAsync(note);
        }

        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _repository.DeleteAsync(id);
            return Ok();
        }
    }
}
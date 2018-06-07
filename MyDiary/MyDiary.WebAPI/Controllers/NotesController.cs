using Microsoft.AspNetCore.Mvc;
using MyDiary.WebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDiary.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/notes")]
    public class NotesController : Controller
    {
        private IRepository<Note> _repository;

        public NotesController(IRepository<Note> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return _repository.GetAll().ToList();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var note = await _repository.GetByIdAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            return new ObjectResult(note);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody]Note note)
        {
            if (note == null)
            {
                return BadRequest();
            }
            await _repository.CreateAsync(note);
            await _repository.SaveAsync();
            return Ok(note);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _repository.DeleteAsync(id);
            if (result == null)
            {
                return NotFound();
            }
            await _repository.SaveAsync();            
            return Ok(result);
        }
    }
}
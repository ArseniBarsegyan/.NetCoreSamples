using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyDiary.Web.Models;

namespace MyDiary.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Note")]
    public class NoteController : Controller
    {
        private IRepository<Note> _repository;

        public NoteController(IRepository<Note> repository)
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

        [HttpPost]
        public IActionResult Post([FromBody]Note note)
        {
            var httpRequest = HttpContext.Request;
            var body = httpRequest.Body;
            return Ok();
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
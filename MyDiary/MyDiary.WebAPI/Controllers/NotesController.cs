using Microsoft.AspNetCore.Mvc;
using MyDiary.WebAPI.Models;

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
        public string[] Get()
        {
            return new[] { "value1", "value2" };
        }
    }
}
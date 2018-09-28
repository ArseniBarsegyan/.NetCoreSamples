using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using MD.MongoDB.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

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
        public async Task<Note> Create()
        {
            var note = JsonConvert.DeserializeObject<Note>(Request.Form["note"]);
            var files = Request.Form.Files;
            var photos = new List<Photo>();

            if (files != null)
            {
                foreach (var file in files)
                {
                    if (file.Length <= 0) continue;
                    byte[] buffer;
                    using (var ms = new MemoryStream())
                    {
                        file.CopyTo(ms);
                        buffer = ms.ToArray();
                    }

                    var photoModel = new Photo
                    {
                        FileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"'),
                        Content = buffer
                    };
                    photos.Add(photoModel);
                }
            }

            return await _repository.CreateNoteAsync(note, photos);
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
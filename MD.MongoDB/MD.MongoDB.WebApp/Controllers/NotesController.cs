using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using MD.MongoDB.DAL;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

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

        [HttpPost("[action]/{noteId}")]
        public async Task<IActionResult> UploadPhoto(string noteId)
        {
            try
            {
                var file = Request.Form.Files[0];
                if (file.Length > 0)
                {
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
                    await _repository.SavePhoto(photoModel);
                }
                return Json("Upload Successful.");
            }
            catch (System.Exception ex)
            {
                return Json("Upload Failed: " + ex.Message);
            }
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
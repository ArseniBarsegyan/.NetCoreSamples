using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using MD.MongoDB.BLL.Dto;
using MD.MongoDB.BLL.Services;
using MD.MongoDB.DAL;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MD.MongoDB.WebApp.Controllers
{
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private readonly INotesService _notesService;

        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<NoteDto>> AllNotes()
        {
            var allNotes = await _notesService.GetAllNotesAsync();
            return allNotes;
        }

        [HttpPost("[action]")]
        public async Task<NoteDto> Create()
        {
            var note = JsonConvert.DeserializeObject<NoteDto>(Request.Form["note"]);
            var files = Request.Form.Files;

            var photoDtos = new List<PhotoDto>();

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

                    var photoDto = new PhotoDto
                    {
                        Name = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"'),
                        Content = Convert.ToBase64String(buffer)
                    };
                    photoDtos.Add(photoDto);
                }
            }
            note.Photos = photoDtos;
            return await _notesService.CreateAsync(note);
        }

        [HttpPut("[action]/{id}")]
        public async Task Update(string id, [FromBody]Note note)
        {
        }

        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _notesService.DeleteNoteAsync(id);
            return Ok();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MD.MongoDB.BLL.Dto;
using MD.MongoDB.BLL.Services;
using MD.MongoDB.DAL;
using MongoDB.Bson;

namespace MD.MongoDB.BLL
{
    public class NotesService : INotesService
    {
        private readonly NoteRepository _noteRepository;
        private readonly PhotoRepository _photoRepository;

        public NotesService(string connectionString)
        {
            _noteRepository = new NoteRepository(connectionString);
            _photoRepository = new PhotoRepository(connectionString);
        }

        public async Task<IEnumerable<NoteDto>> GetAllNotesAsync()
        {
            var noteModels = await _noteRepository.GetAllAsync();
            return await ConvertToNoteDtos(noteModels);
        }

        public async Task<NoteDto> CreateAsync(NoteDto noteDto)
        {
            var note = new Note
            {
                Date = noteDto.Date,
                Description = noteDto.Description
            };
            if (noteDto.Photos.Any())
            {
                var photos = ConvertToPhotoModels(noteDto.Photos);
                note.FilesIds = (await _photoRepository.CreatePhotos(photos)).ToList();
            }
            var result = await _noteRepository.CreateNoteAsync(note);
            return await ConvertToNoteDto(result);
        }

        public async Task DeleteNoteAsync(string id)
        {
            var deletedNote = await _noteRepository.DeleteAsync(id);
            await _photoRepository.DeletePhotosByIds(deletedNote.FilesIds);
        }

        #region private_methods

        private async Task<NoteDto> ConvertToNoteDto(Note noteModel)
        {
            var dto = new NoteDto
            {
                Date = noteModel.Date,
                Description = noteModel.Description,
                Id = noteModel.Id
            };
            var allPhotos = await _photoRepository.GetPhotosByIds(noteModel.FilesIds);
            var photoDtos = ConvertToPhotoDtos(allPhotos);
            SetNoteIdToAllPhotoDto(photoDtos, dto.Id);
            return dto;
        }

        private PhotoDto ConvertToPhotoDto(Photo photoModel)
        {
            var dto = new PhotoDto
            {
                Id = photoModel.Id,
                Content = Convert.ToBase64String(photoModel.Content),
                Name = photoModel.FileName
            };
            return dto;
        }

        private async Task<IEnumerable<NoteDto>> ConvertToNoteDtos(IEnumerable<Note> noteModels)
        {
            var noteDtos = new List<NoteDto>();

            foreach (var noteModel in noteModels)
            {
                var noteDto = new NoteDto
                {
                    Id = noteModel.Id,
                    Date = noteModel.Date,
                    Description = noteModel.Description
                };

                var allPhotoModels = await _photoRepository.GetPhotosByIds(noteModel.FilesIds);
                noteDto.Photos = ConvertToPhotoDtos(allPhotoModels);
                SetNoteIdToAllPhotoDto(noteDto.Photos, noteDto.Id);

                noteDtos.Add(noteDto);
            }
            return noteDtos;
        }

        private void SetNoteIdToAllPhotoDto(IEnumerable<PhotoDto> photoDtos, string noteId)
        {
            foreach (var photoDto in photoDtos)
            {
                photoDto.NoteId = noteId;
            }
        }

        private IEnumerable<Photo> ConvertToPhotoModels(IEnumerable<PhotoDto> photoDtos)
        {
            return photoDtos.Select(photoDto => new Photo
            {
                Id = photoDto.Id,
                Content = Convert.FromBase64String(photoDto.Content),
                FileName = photoDto.Name
            })
            .ToList();
        }

        private IEnumerable<PhotoDto> ConvertToPhotoDtos(IEnumerable<Photo> photoModels)
        {
            return photoModels.Select(photoModel => new PhotoDto
                {
                    Id = photoModel.Id,
                    Content = Convert.ToBase64String(photoModel.Content),
                    Name = photoModel.FileName
                })
                .ToList();
        }
        #endregion
    }
}
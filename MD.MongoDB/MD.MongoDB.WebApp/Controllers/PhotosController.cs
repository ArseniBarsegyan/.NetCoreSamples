using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MD.MongoDB.DAL;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace MD.MongoDB.WebApp.Controllers
{
    public class PhotosController : Controller
    {
        private readonly PhotoRepository _repository;

        public PhotosController()
        {
            _repository = new PhotoRepository("mongodb://localhost:27017");
        }

        [HttpGet("[action]/{id}")]
        public async Task<IEnumerable<Photo>> AllPhotos(IEnumerable<string> ids)
        {
            var objIds = ids.Select(id => new ObjectId(id)).ToList();
            return await _repository.GetPhotosByIds(objIds);
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

namespace MD.MongoDB.DAL
{
    /// <summary>
    /// Provide CRUD operations with photo entities in MongoDB.
    /// </summary>
    public class PhotoRepository
    {
        private readonly IGridFSBucket _gridFs;

        public PhotoRepository(string connectionString)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("MDMongoDB");
            _gridFs = new GridFSBucket(database);
        }

        /// <summary>
        /// Get all files from database by their ids as photo models.
        /// </summary>
        /// <param name="fileIds">Ids of the files to be find.</param>
        /// <returns></returns>
        public async Task<IEnumerable<Photo>> GetPhotosByIds(IEnumerable<ObjectId> fileIds)
        {
            var resultList = new List<Photo>();

            foreach (var fileId in fileIds)
            {
                var fileContent = _gridFs.DownloadAsBytes(fileId);

                var filter = Builders<GridFSFileInfo>.Filter.Eq("_id", ObjectId.Parse(fileId.ToString()));
                var fileInfo = _gridFs.Find(filter).FirstOrDefault();

                if (fileInfo != null)
                {
                    var photoModel = new Photo
                    {
                        Id = fileInfo.Id.ToString(),
                        Content = fileContent,
                        FileName = fileInfo.Filename
                    };
                    resultList.Add(photoModel);
                }
            }
            return resultList;
        }

        public async Task<IEnumerable<ObjectId>> CreatePhotos(IEnumerable<Photo> photos)
        {
            var result = new List<ObjectId>();
            if (photos != null)
            {
                foreach (var photo in photos)
                {
                    if (!photo.Content.Any()) continue;
                    ObjectId imageId = await _gridFs.UploadFromBytesAsync(photo.FileName, photo.Content);
                    result.Add(imageId);
                }
            }
            return result;
        }

        /// <summary>
        /// Delete photos by ids from database.
        /// </summary>
        /// <param name="fileIds">ids of the photos to be deleted.</param>
        /// <returns></returns>
        public async Task DeletePhotosByIds(IEnumerable<ObjectId> fileIds)
        {
            foreach (var fileId in fileIds)
            {
                await _gridFs.DeleteAsync(fileId);
            }
        }
    }
}
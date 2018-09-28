using System.Collections.Generic;
using System.Threading.Tasks;
using MD.MongoDB.DAL;

namespace MD.MongoDB.ConsoleClient
{
    class Program
    {
        static void Main(string[] args)
        {
            string connectionString = "mongodb://localhost:27017";
            Task<List<Note>> task = Task.Run(async () =>
            {
                var repository = new NoteRepository(connectionString);
                return await repository.GetAllAsync();
            });
            task.Wait();
            var result = task.Result;
        }
    }
}

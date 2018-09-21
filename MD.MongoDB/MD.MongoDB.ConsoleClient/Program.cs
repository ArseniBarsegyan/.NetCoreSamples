using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MD.MongoDB.DAL;
using MongoDB.Driver;

namespace MD.MongoDB.ConsoleClient
{
    class Program
    {
        static void Main(string[] args)
        {
            string connectionString = "mongodb://localhost:27017";
            Task<List<Note>> task = Task.Run(async () => await GetAllNotes(connectionString));
            task.Wait();
            var result = task.Result;
        }

        private static async Task<List<Note>> GetAllNotes(string connectionString)
        {
            var repository = new NoteRepository(connectionString);
            return await repository.GetAll();
        }
    }
}

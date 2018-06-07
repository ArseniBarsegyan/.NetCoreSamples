using System;
using System.Collections.Generic;

namespace MyDiary.WebApp.Models
{
    /// <summary>
    /// Notes table in database.
    /// </summary>
    public class Note : Entity
    {
        public Note()
        {
            Photos = new List<Photo>();
        }

        public string Description { get; set; }
        public DateTime Date { get; set; }
        public List<Photo> Photos { get; set; }
    }
}
namespace MyDiary.WebApp.Models
{
    /// <summary>
    /// Photos table in database.
    /// </summary>
    public class Photo : Entity
    {
        public string Name { get; set; }        
        public int NoteId { get; set; }
        public Note Note { get; set; }
        public byte[] Image { get; set; }
    }
}
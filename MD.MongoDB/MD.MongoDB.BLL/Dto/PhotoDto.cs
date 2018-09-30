namespace MD.MongoDB.BLL.Dto
{
    /// <summary>
    /// Photo DTO.
    /// </summary>
    public class PhotoDto
    {
        /// <summary>
        /// Photo id.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Photo name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Id of the note to which photo is belong to.
        /// </summary>
        public string NoteId { get; set; }

        /// <summary>
        /// Photo content as Base64 string.
        /// </summary>
        public string Content { get; set; }
    }
}
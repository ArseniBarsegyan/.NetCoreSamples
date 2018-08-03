using System.ComponentModel.DataAnnotations;

namespace MyDiary.Web.DTO
{
    public class LoginDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
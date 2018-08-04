using System.ComponentModel.DataAnnotations;

namespace MyDiary.Web.DTO
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "PASSWORD_MIN_LENGTH", MinimumLength = 4)]
        public string Password { get; set; }
    }
}
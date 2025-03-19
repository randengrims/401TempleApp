using System.ComponentModel.DataAnnotations;

namespace _401TempleApp;

public class User
{
    [Key]
    public int UserID { get; set; }
    
    [Required]
    public string Username { get; set; } // parameter for how long usernames can be?
    
    [Required]
    public string FirstName { get; set; }
    
    [Required]
    public string LastName { get; set; }
    
    
    public string UserGoal { get; set; }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _401TempleApp;

public class Appointment
{
    [Key]
    public int AppointmentID { get; set; }
    
    [Required]
    public int UserID { get; set; }
    
    [ForeignKey("UserID")]
    public User User { get; set; }
    
    [Required]
    public string Time { get; set; }
    [Required]
    public string Date { get; set; } 
    
    [Required]
    public int TempleID { get; set; }
    
    [ForeignKey("TempleID")]
    public Temple Temple { get; set; }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _401TempleApp;

public class Appointment
{
    [Key]
    public int AppointmentID { get; set; }
    
    [Required]
    public int UserId { get; set; }
    
    [ForeignKey("UserId")]
    public User User { get; set; }
    
    [Required]
    public string Time { get; set; }
    [Required]
    public string Date { get; set; } 
    
    [Required]
    public int TempleId { get; set; }
    
    [ForeignKey("TempleId")]
    public Temple Temple { get; set; }
}
using System.ComponentModel.DataAnnotations;

namespace _401TempleApp;

public class Ordinance
{
    [Key]
    public int OrdinanceId { get; set; }
    
    [Required]
    public string OrdinanceName { get; set; }
}
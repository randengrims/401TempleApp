using System.ComponentModel.DataAnnotations;

namespace _401TempleApp;

public class Ordinance
{
    [Key]
    public int OrdinanceID { get; set; }
    
    [Required]
    public string OrdinanceType { get; set; }
}
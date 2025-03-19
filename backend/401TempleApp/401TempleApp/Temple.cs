using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;


namespace _401TempleApp;

public class Temple
{
    [Key]
    int TempleID { get; set; }
    [Required]
    string TempleName { get; set; }
    
    [Required]
    string TempleAddress { get; set; }
    
    [Required]
    string TempleState { get; set; }
    
    [Required]
    int TempleZip { get; set; }
    
    
    [Required]
    public int OrdinanceID { get; set; }
    
    [ForeignKey("OrdinanceID")]
    public Ordinance Ordinance { get; set; }
    
    
}
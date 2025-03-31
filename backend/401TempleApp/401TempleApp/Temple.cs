using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;


namespace _401TempleApp;

public class Temple
{
    [Key]
    public int TempleId { get; set; }  // ✅ Make it public

    [Required]
    public string TempleName { get; set; }  // ✅ Make it public
    
    [Required]
    public string TempleAddress { get; set; }  // ✅ Make it public
    
    [Required]
    public string TempleState { get; set; }  // ✅ Make it public
    
    [Required]
    public int TempleZip { get; set; }  // ✅ Make it public
    
    [Required]
    public int OrdinanceId { get; set; }  // ✅ Make it public
    
    [ForeignKey("OrdinanceID")]
    public Ordinance Ordinance { get; set; }  // ✅ Make it public
}

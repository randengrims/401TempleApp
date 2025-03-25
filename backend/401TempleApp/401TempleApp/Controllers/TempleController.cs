using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _401TempleApp.Controllers;

[Route("[controller]")]
[ApiController]
public class TempleController : ControllerBase
{
    private TempleDbContext _templeContext;

    public TempleController(TempleDbContext temp)
    {
        _templeContext = temp;
    }
    [HttpGet("AllTemples")]
    public IActionResult GetTemples()
    {
        var query = _templeContext.Temples.AsQueryable();


            
        var something = query
            .Include(a => a.Ordinance.OrdinanceName)   // Load related User data
            .ToList();
            
        var TotalNumTemples = query.Count();
        var someObject = new
        {
            temples = something,
            totalNumTemples = TotalNumTemples
        };
        return Ok(someObject);
    }
    [HttpGet("GetOrdinances")]
    public IActionResult GetOrdinances()
    {
        var ordinances = _templeContext.Ordinances
            .Select(p => p.OrdinanceName)
            .Distinct()
            .ToList();
            
        return Ok(ordinances);
    }
    [HttpGet("GetUsers")]
    public IActionResult GetUsers()
    {
        var query = _templeContext.Users.AsQueryable();


            
        var something = query
            .ToList();
            
        var TotalNumUsers = query.Count();
        var someObject = new
        {
            users = something,
            totalNumUsers = TotalNumUsers
        };
        return Ok(someObject);
    }
    [HttpGet("GetAppointments")]
    public IActionResult GetAppointments()
    {
        var appointments = _templeContext.Appointments
            
            .Include(a => a.User.Username)   // Load related User data
            .Include(a => a.Temple.TempleName) // Load related Temple data
            .ToList();
            
        return Ok(appointments);
    }
}

using Microsoft.EntityFrameworkCore;

namespace _401TempleApp;

public class TempleDbContext : DbContext
{
    public TempleDbContext(DbContextOptions<TempleDbContext> options) : base(options)
    {
        
    }
    public DbSet<Temple> Temples { get; set; }
    public DbSet<Ordinance> Ordinances { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Appointment> Appointments { get; set; }
}
using Microsoft.EntityFrameworkCore;

namespace TargetManager.Domain.EFCore
{
    public class DataBaseContext : DbContext
    {
        public DbSet<Target> Targets { get; set; }
        public DbSet<User> Users { get; set; }
        public DataBaseContext(DbContextOptions<DataBaseContext> options)
            : base(options)
        {
            Database.Migrate();
        }
    }
}

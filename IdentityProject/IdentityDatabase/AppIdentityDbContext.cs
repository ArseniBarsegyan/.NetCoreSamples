using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityDatabase
{
    public class AppIdentityDbContext : IdentityDbContext<AppUser>
    {
        public AppIdentityDbContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<AppUser>("AspNetUsers", "dbo"));
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<IdentityRole>("AspNetRoles", "dbo"));
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<IdentityUserClaim<string>>("AspNetUserClaims", "dbo"));
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<IdentityUserRole<string>>("AspNetUserRoles", "dbo"));
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<IdentityUserLogin<string>>("AspNetUserLogins", "dbo"));
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<IdentityRoleClaim<string>>("AspNetRoleClaims", "dbo"));
            modelBuilder.ApplyConfiguration(new AppIdentityTypeConfiguration<IdentityUserToken<string>>("AspNetUserToken", "dbo"));
        }
    }
}
using Microsoft.EntityFrameworkCore;

namespace MyDiary.WebAPI.Entities
{
    /// <summary>
    /// ApplicationContext class.
    /// </summary>
    public class ApplicationContext : DbContext
    {
        /// <inheritdoc />
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationContext"/> class.
        /// </summary>
        /// <param name="dbContextOptions">The database context options.</param>
        /// <param name="schemaName">Name of the schema.</param>
        public ApplicationContext(DbContextOptions dbContextOptions, string schemaName)
            : base(dbContextOptions)
        {
            SchemaName = schemaName;
        }

        /// <summary>
        /// Database schema name
        /// </summary>
        public string SchemaName { get; }

        /// <inheritdoc />
        /// <summary>
        /// Applying the configuration of dbContext entities
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new AppEntityTypeConfiguration<Note>("Notes", SchemaName));
            modelBuilder.ApplyConfiguration(new AppEntityTypeConfiguration<Note>("Photos", SchemaName));
        }
    }
}
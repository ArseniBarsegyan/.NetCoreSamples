using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IdentityDatabase
{
    public class AppIdentityTypeConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : class
    {
        public AppIdentityTypeConfiguration(string tableName, string schemaName)
        {
            TableName = tableName;
            SchemaName = schemaName;
        }

        public string TableName { get; }
        public string SchemaName { get; }

        public void Configure(EntityTypeBuilder<TEntity> builder)
        {
            // Table
            builder.ToTable(TableName, SchemaName);
        }
    }
}
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MyDiary.WebApp.Models
{
    /// <inheritdoc />
    /// <summary>
    /// Generic repository.
    /// </summary>
    /// <typeparam name="TEntity">Class that implements <see cref="T:MyDiary.WebAPI.Models.Entity" /> class.</typeparam>
    public class Repository<TEntity> : IDisposable, IRepository<TEntity>
        where TEntity : Entity
    {
        private readonly DbContext _dbContext;
        private bool _disposed;

        protected DbSet<TEntity> DbSet => _dbContext.Set<TEntity>();

        public Repository(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<TEntity> GetAll()
        {
            return DbSet;
        }

        public async Task CreateAsync(TEntity item)
        {
            await DbSet.AddAsync(item);
        }

        public async Task<TEntity> GetByIdAsync(int? id)
        {
            return await DbSet.FirstOrDefaultAsync(x => x.Id == id);
        }

        public void Update(TEntity item)
        {
            _dbContext.Entry(item).State = EntityState.Modified;
        }

        public async Task<TEntity> DeleteAsync(int? id)
        {
            var item = await DbSet.FirstOrDefaultAsync(x => x.Id == id);
            if (item != null)
            {
                DbSet.Remove(item);
            }
            return item;
        }

        public async Task SaveAsync()
        {
            await _dbContext.SaveChangesAsync();
        }

        public virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
                }
            }
            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
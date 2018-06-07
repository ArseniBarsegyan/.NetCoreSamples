using System.Linq;
using System.Threading.Tasks;

namespace MyDiary.WebAPI.Models
{
    public interface IRepository<TEntity> where TEntity : Entity
    {
        IQueryable<TEntity> GetAll();
        Task CreateAsync(TEntity item);
        Task<TEntity> GetByIdAsync(int? id);
        void Update(TEntity item);
        Task DeleteAsync(int? id);
        Task SaveAsync();
    }
}

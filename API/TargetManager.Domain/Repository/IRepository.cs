using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace TargetManager.Domain.Repository
{
    public interface IRepository<T> where T : class
    {
        Task Create(T item);
        Task<T> FindById(int id);
        Task<IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> Get(Expression<Func<T, bool>> predicate);
        Task Remove(T item);
        Task Update(T item);
    }
}

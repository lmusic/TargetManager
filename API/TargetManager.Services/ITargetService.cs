using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TargetManager.Domain;

namespace TargetManager.Services
{
    public interface ITargetService
    {
        Task<IEnumerable<Target>> GetAll(User user);
        Task<Target> GetTarget(int id);
        Task AddTarget(User user, string name, string description, DateTime deadline, TargetType type);
        Task UpdateTarget(int id, string name, string description, DateTime deadline, TargetType type);
        Task DeleteTarget(int id);
    }
}

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TargetManager.Domain;
using TargetManager.Domain.Repository;

namespace TargetManager.Services
{
    public class TargetService : ITargetService
    {
        private readonly IRepository<Target> _targetRepository;
        public TargetService(IRepository<Target> targetRepository)
        {
            _targetRepository = targetRepository;
        }

        public async Task<IEnumerable<Target>> GetAll(User user)
        {
            return await _targetRepository.Get(x => x.UserId == user.Id);
        }
        public async Task<Target> GetTarget(int id)
        {
            return await _targetRepository.FindById(id);
        }

        public async Task AddTarget(User user, string name, string description, DateTime deadline, TargetType type)
        {
            var target = new Target(user, name, description, deadline, type);

            await _targetRepository.Create(target);
        }

        public async Task UpdateTarget(int id, string name, string description, DateTime deadline, TargetType type)
        {
            var target = await GetTarget(id);

            target.EditName(name);
            target.EditDescription(description);
            target.EditDeadLine(deadline);
            target.EditType(type);

            await _targetRepository.Update(target);
        }

        public async Task DeleteTarget(int id)
        {
            var target = await GetTarget(id);
            await _targetRepository.Remove(target);
        }
    }
}

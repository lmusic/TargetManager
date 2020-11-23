using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TargetManager.Domain;
using TargetManager.Domain.Repository;

namespace TargetManager.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;

        public UserService(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task Add(string email, string login, string password)
        {
            var user = new User(email, login, password);
            await _userRepository.Create(user);
        }

        public Task Edit(int id, string email, string login, string password)
        {
            throw new NotImplementedException();

        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<User> Get(string login, string password)
        {
            return (await _userRepository.Get(x =>x.Password == password.EncodeDecrypt() && x.Login == login)).FirstOrDefault();
        }

        public async Task<User> Get(string login)
        {
            return (await _userRepository.Get(x => x.Login == login)).FirstOrDefault();
        }

        public async Task<bool> IsEmailFree(string email)
        {
            return (await _userRepository.Get(x => x.Email == email)).FirstOrDefault() == null;
        }
    }
}

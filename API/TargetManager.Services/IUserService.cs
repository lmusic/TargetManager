using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TargetManager.Domain;

namespace TargetManager.Services
{
    public interface IUserService
    {
        Task Add(string email, string login, string password);
        Task Edit(int id, string email, string login, string password);
        Task Delete(int id);
        Task<User> Get(string login, string password);
        Task<User> Get(string login);
        Task<bool> IsEmailFree(string email);
    }
}

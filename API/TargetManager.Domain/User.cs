using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TargetManager.Domain
{
    public class User : BaseEntity
    {
        private string _password;
        public string Email { get; private set; }
        public string Login { get; private set; }

        public string Password
        {
            get => _password?.EncodeDecrypt();
            private set => _password = value?.EncodeDecrypt();
        }

        protected User()
        {

        }

        public User(string email, string login, string password)
        {
            Email = email;
            Login = login;
            Password = password;
        }


    }
}

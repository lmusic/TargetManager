using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace TargetManager.API
{
    public static class AuthOptions
    {
        public const string Issuer = "TargetManagerServer";
        public const string Audience = "TargetManagerClient";
        private const string Key = "target-manager-secret-key";
        public const int Lifetime = 10000;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key));
        }
    }
}

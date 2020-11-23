using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TargetManager.Domain
{
    public static class StringHelper
    {
        private const ushort SecretKey = 0x0088;
        public static string EncodeDecrypt(this string str)
        {
            return str.ToArray().Aggregate("", (current, c) => current + TopSecret(c));
        }

        private static char TopSecret(char character)
        {
            return (char)(character ^ SecretKey);
        }
    }
}

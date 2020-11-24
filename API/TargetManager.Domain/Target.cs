using System;
using System.IO;

namespace TargetManager.Domain
{
    public class Target : BaseEntity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public DateTime DeadLine { get; private set; }
        public TargetType Type { get; private set; }

        public User User { get; private set; }

        public int? UserId { get; set; }

        protected Target()
        {

        }

        public Target(User user, string name, string description, DateTime deadLine, TargetType type)
        {
            Name = name;
            Description = description;
            DeadLine = deadLine;
            Type = type;

            User = user;
            UserId = user.Id;
        }

        public void EditName(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentNullException(nameof(name));
            }

            Name = name;
        }

        public void EditDescription(string description)
        {
            if (string.IsNullOrEmpty(description))
            {
                throw new ArgumentNullException(nameof(description));
            }

            Description = description;
        }

        public void EditDeadLine(DateTime deadLine)
        {
            if (DateTime.Now >= deadLine)
            {
                throw new InvalidDataException($"{nameof(deadLine)} should not be in the past");
            }

            DeadLine = deadLine;
        }

        public void EditType(TargetType type)
        {
            Type = type;
        }
    }
}

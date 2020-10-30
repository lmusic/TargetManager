using System;
using TargetManager.Domain;

namespace TargetManager.API.ViewModels
{
    public class TargetViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DeadLine { get; set; }
        public TargetType Type { get; set; }
    }
}

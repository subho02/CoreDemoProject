using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FitAndHealthy.Models
{
    public class AddHardware
    {
        [Key]
        public string HardwareID { get; set; }
        public string HardwareName { get; set; }
        public string HardwareDescription { get; set; }
        public string HardwareCategory { get; set; }
        public string HardwareVendor { get; set; }
    }
}

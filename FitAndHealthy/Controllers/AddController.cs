using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FitAndHealthy.Data;
using FitAndHealthy.Models;
using Microsoft.EntityFrameworkCore;

namespace FitAndHealthy.Controllers
{
    [Produces("application/json")]
    [Route("api/Add")]
    public class AddController : Controller
    {
        private WorkoutDataContext _workoutDataContext;
        public AddController(WorkoutDataContext workoutDataContext)
        {
            _workoutDataContext = workoutDataContext;
        }

        [HttpGet]
        public IEnumerable<AddHardware> getHardwares()
        {
            return _workoutDataContext.Hardwares;
        }

        [HttpGet("{hardwareID}")]
        public async Task<IActionResult> getHardware([FromRoute]string hardwareID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var hardware = await _workoutDataContext.Hardwares.SingleOrDefaultAsync(m => m.HardwareID == hardwareID);
            if(hardware == null)
            {
                return NotFound();
            }
            return Ok(hardware);
        }

        [HttpPost]
        public async Task<IActionResult> addNewHardware([FromBody] AddHardware hardware)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _workoutDataContext.Hardwares.Add(hardware);
            await _workoutDataContext.SaveChangesAsync();
            return CreatedAtAction("getHardware", new { hardwareID = hardware.HardwareID }, hardware);
        }

    }
}
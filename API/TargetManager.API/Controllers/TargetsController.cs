using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using TargetManager.API.ViewModels;
using TargetManager.Services;

namespace TargetManager.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TargetsController : ControllerBase
    {
        private readonly ITargetService _targetService;
        public TargetsController(ITargetService targetService)
        {
            _targetService = targetService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var targets = await _targetService.GetAll();

            return new JsonResult(targets);
        }
        [Route("{id}")]
        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var target = await _targetService.GetTarget(id);

            return new JsonResult(target);
        }

        [Route("add")]
        [HttpPost]
        public async Task<IActionResult> Add(TargetViewModel targetViewModel)
        {
            await _targetService.AddTarget(targetViewModel.Name, targetViewModel.Description, targetViewModel.DeadLine, targetViewModel.Type);

            return Ok();
        }

        [Route("edit")]
        [HttpPut]
        public async Task<IActionResult> Edit(TargetViewModel targetViewModel)
        {
            await _targetService.UpdateTarget(targetViewModel.Id, targetViewModel.Name, targetViewModel.Description, targetViewModel.DeadLine, targetViewModel.Type);

            return Ok();
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            await _targetService.DeleteTarget(id);

            return Ok();
        }
    }
}

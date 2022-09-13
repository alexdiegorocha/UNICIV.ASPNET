using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Service;

namespace GestaoEscolar.Web.Api.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TurmaController : ControllerBase
    {
        private TurmaService TurmaService;

        public TurmaController(TurmaService turmaService)
        {
            TurmaService = turmaService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await TurmaService.All();
            return Ok(result); 
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            var result = await TurmaService.Single(id);
            return Ok(result); 
        }

        [HttpPost]
        public async Task<IActionResult> Post(Turma turma)
        {
            var result = await TurmaService.Add(turma);
            return Ok(result); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Turma turma)
        {
            var result = await TurmaService.Replace(id, turma);
            return Ok(result); 
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            await TurmaService.Remove(id);
            return Ok(); 
        }
    }
}
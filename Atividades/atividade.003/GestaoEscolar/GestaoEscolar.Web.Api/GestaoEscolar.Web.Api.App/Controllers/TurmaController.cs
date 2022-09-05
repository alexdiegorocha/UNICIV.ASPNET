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
            return await Task.Run(() => {
                var result = TurmaService.All();
                return Ok(result); 
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            return await Task.Run(() => {
                var result = TurmaService.Single(id);
                return Ok(result); 
            });
        }

        [HttpPost]
        public async Task<IActionResult> Post(Turma turma)
        {
            return await Task.Run(() => {
                var result = TurmaService.Add(turma);
                return Ok(result); 
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Turma turma)
        {
            return await Task.Run(() => {
                var result = TurmaService.Replace(id, turma);
                return Ok(result); 
            });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            return await Task.Run(() => {
                TurmaService.Remove(id);
                return Ok(); 
            });
        }
    }
}
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
    public class AlunoController : ControllerBase
    {
        private AlunoService AlunoService;

        public AlunoController(AlunoService alunoService)
        {
            AlunoService = alunoService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return await Task.Run(() => {
                var result = AlunoService.All();
                return Ok(result); 
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            return await Task.Run(() => {
                var result = AlunoService.Single(id);
                return Ok(result); 
            });
        }

        [HttpPost]
        public async Task<IActionResult> Post(Aluno aluno)
        {
            return await Task.Run(() => {
                var result = AlunoService.Add(aluno);
                return Ok(result); 
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Aluno aluno)
        {
            return await Task.Run(() => {
                var result = AlunoService.Replace(id, aluno);
                return Ok(result); 
            });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            return await Task.Run(() => {
                AlunoService.Remove(id);
                return Ok(); 
            });
        }
    }
}
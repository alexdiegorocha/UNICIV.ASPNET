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
            var result = await AlunoService.All();
            return Ok(result); 
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            var result = await AlunoService.Single(id);
            return Ok(result); 
        }

        [HttpPost]
        public async Task<IActionResult> Post(Aluno aluno)
        {
            var result = await AlunoService.Add(aluno);
            return Ok(result); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Aluno aluno)
        {
            var result = await AlunoService.Replace(id, aluno);
            return Ok(result); 
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            await AlunoService.Remove(id);
            return Ok(); 
        }
    }
}
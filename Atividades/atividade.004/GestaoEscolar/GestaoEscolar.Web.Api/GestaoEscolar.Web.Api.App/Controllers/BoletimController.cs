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
    public class BoletimController : ControllerBase
    {
        private BoletimService BoletimService; 

        public BoletimController(BoletimService boletimService)
        {
            BoletimService = boletimService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(AlunoDisciplina[] alunoDisciplinas) 
        {
            var result = await BoletimService.AtualizarNotas(alunoDisciplinas);
            return Ok(result);
        }

        [HttpGet("aluno/{id}")]
        public async Task<IActionResult> GetByAluno(long id)
        {
            var result = await BoletimService.RetornarPorAluno(id);
            return Ok(result);
        } 

        [HttpGet("disciplina/{id}")]
        public async Task<IActionResult> GetByDisciplina(long id)
        {
            var result = await BoletimService.RetornarPorDisciplina(id);
            return Ok(result);
        }
    }
}
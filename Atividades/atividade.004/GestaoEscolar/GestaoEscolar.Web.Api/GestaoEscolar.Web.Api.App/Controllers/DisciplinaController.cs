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
    public class DisciplinaController : ControllerBase
    {
        private DisciplinaService DisciplinaService;

        public DisciplinaController(DisciplinaService disciplinaService)
        {
            DisciplinaService = disciplinaService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await DisciplinaService.All();
            return Ok(result); 
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            var result = await DisciplinaService.Single(id);
            return Ok(result); 
        }

        [HttpPost]
        public async Task<IActionResult> Post(Disciplina disciplina)
        {
            var result = await DisciplinaService.Add(disciplina);
            return Ok(result); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Disciplina disciplina)
        {
            var result = await DisciplinaService.Replace(id, disciplina);
            return Ok(result); 
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            await DisciplinaService.Remove(id);
            return Ok(); 
        }
    }
}
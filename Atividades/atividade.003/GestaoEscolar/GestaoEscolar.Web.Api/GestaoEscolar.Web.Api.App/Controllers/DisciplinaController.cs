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
        public Task<IActionResult> Get()
        {
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public Task<IActionResult> GetById(long id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public Task<IActionResult> Post(Disciplina disciplina)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public Task<IActionResult> Put(long id, Disciplina disciplina)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public Task<IActionResult> Delete(long id)
        {
            throw new NotImplementedException();
        }
    }
}
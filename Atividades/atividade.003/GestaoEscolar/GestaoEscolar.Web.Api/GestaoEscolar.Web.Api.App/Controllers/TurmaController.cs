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
        public Task<IActionResult> Post(Turma aluno)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public Task<IActionResult> Put(long id, Turma aluno)
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
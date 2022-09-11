using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class AlunoDisciplinaService : CRUDService<AlunoDisciplina>
    {
        private AlunoRepository AlunoRepository {get; set;}
        private DisciplinaRepository DisciplinaRepository {get; set;}
        public AlunoDisciplinaService(AlunoDisciplinaRepository repository,
                                      AlunoRepository alunoRepository,
                                      DisciplinaRepository disciplinaRepository) : base(repository)
        {
            AlunoRepository = alunoRepository;
            DisciplinaRepository = disciplinaRepository;
        }

        private async Task<AlunoDisciplina> Map(AlunoDisciplina model) 
        {
            var aluno = model.Aluno;
            var disciplina = model.Disciplina;
            model.Aluno = null;
            model.Disciplina = null;

            if (!(disciplina is null)) 
            {
                model.IdDisciplina = disciplina.Id;
            }

            if (!(aluno is null)) 
            {
                model.IdAluno = aluno.Id;
            }

            return model;
        }

        public override async Task<AlunoDisciplina> Add(AlunoDisciplina model)
        {
            model = await Map(model);
            var result =  await base.Add(model);
            return result;
        }

        public override async Task<AlunoDisciplina> Replace(long id, AlunoDisciplina model)
        {
            model = await Map(model);
            var result =  await base.Replace(id, model);
            return result;
        }
    }
}
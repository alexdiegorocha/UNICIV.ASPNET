using System.Linq;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Service
{
    public class AlunoService : CRUDService<Aluno>
    {
        private AlunoDisciplinaService AlunoDisciplinaService;

        public AlunoService(AlunoRepository repository,
                            AlunoDisciplinaService alunoDisciplinaService) : base(repository)
        {
            AlunoDisciplinaService = alunoDisciplinaService;
        }

        public override async Task<Aluno> Add(Aluno aluno) 
        {
            var alunoModel = await base.Add(aluno);
            var alunoDisciplinasDAO = aluno.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            var alunoDisciplinas = alunoDisciplinasDAO.ToList();

            alunoDisciplinas.ForEach(async alunoDisciplina => {
                alunoDisciplina.Aluno = alunoModel;
                await AlunoDisciplinaService.Add(alunoDisciplina);
            });

            return alunoModel;
        }

        public override async Task<Aluno> Replace(long id, Aluno aluno)
        {
            var alunoModel = await base.Replace(id, aluno);
            var alunoDisciplinasDAO = aluno.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            var alunoDisciplinas = alunoDisciplinasDAO.ToList();
            alunoDisciplinas.ForEach(async alunoDisciplina => {
                alunoDisciplina.Aluno = alunoModel;
                await AlunoDisciplinaService.Replace(alunoDisciplina.Id, alunoDisciplina);
            });

            return alunoModel;
        }

        public override async Task Remove(long id)
        {
            var alunoModel = await Repository.Find(id);
            await base.Remove(id);

            if (!(alunoModel is null)) {
                var alunoDisciplinasDAO = alunoModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};
                var alunoDisciplinas = alunoDisciplinasDAO.ToList();
                alunoDisciplinas.ForEach(async alunoDisciplina => {
                    alunoDisciplina.Aluno = alunoModel;
                    await AlunoDisciplinaService.Remove(alunoDisciplina.Id);
                });
            }
        }
    }
}
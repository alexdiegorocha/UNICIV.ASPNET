using System.Linq;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

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

        public override Aluno Add(Aluno aluno) 
        {
            var alunoModel = base.Add(aluno);
            var alunoDisciplinasDAO = aluno.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            var alunoDisciplinas = alunoDisciplinasDAO.ToList();

            alunoDisciplinas.ForEach(alunoDisciplina => {
                alunoDisciplina.Aluno = alunoModel;
                AlunoDisciplinaService.Add(alunoDisciplina);
            });

            return alunoModel;
        }

        public override Aluno Replace(long id, Aluno aluno)
        {
            var alunoModel = base.Replace(id, aluno);
            var alunoDisciplinasDAO = aluno.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            var alunoDisciplinas = alunoDisciplinasDAO.ToList();
            alunoDisciplinas.ForEach(alunoDisciplina => {
                alunoDisciplina.Aluno = alunoModel;
                AlunoDisciplinaService.Replace(alunoDisciplina.Id, alunoDisciplina);
            });

            return alunoModel;
        }

        public override void Remove(long id)
        {
            var alunoModel = Repository.Find(id);
            base.Remove(id);

            if (!(alunoModel is null)) {
                var alunoDisciplinasDAO = alunoModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};
                var alunoDisciplinas = alunoDisciplinasDAO.ToList();
                alunoDisciplinas.ForEach(alunoDisciplina => {
                    alunoDisciplina.Aluno = alunoModel;
                    AlunoDisciplinaService.Remove(alunoDisciplina.Id);
                });
            }
        }
    }
}
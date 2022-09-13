using System.Linq;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class DisciplinaService : CRUDService<Disciplina>
    {
        private AlunoDisciplinaService AlunoDisciplinaService;
        
        public DisciplinaService(DisciplinaRepository repository,
                                 AlunoDisciplinaService alunoDisciplinaService) : base(repository)
        {
            AlunoDisciplinaService = alunoDisciplinaService;
        }

        public override Disciplina Replace(long id, Disciplina disciplina)
        {
            var disciplinaModel = base.Replace(id, disciplina);
            var alunoDisciplinasDAO = disciplinaModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};

            var alunoDisciplinas = alunoDisciplinasDAO.ToList();
            alunoDisciplinas.ForEach(alunoDisciplina => {
                alunoDisciplina.Disciplina = disciplinaModel;
                AlunoDisciplinaService.Replace(alunoDisciplina.Id, alunoDisciplina);
            });

            return disciplinaModel;
        }

        public override void Remove(long id)
        {
            var disciplinaModel = Repository.Find(id);
            base.Remove(id);

            if (!(disciplinaModel is null)) {
                var alunoDisciplinasDAO = disciplinaModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};
                var alunoDisciplinas = alunoDisciplinasDAO.ToList();
                alunoDisciplinas.ForEach(alunoDisciplina => {
                    AlunoDisciplinaService.Remove(alunoDisciplina.Id);
                });
            }
        }
    }
}
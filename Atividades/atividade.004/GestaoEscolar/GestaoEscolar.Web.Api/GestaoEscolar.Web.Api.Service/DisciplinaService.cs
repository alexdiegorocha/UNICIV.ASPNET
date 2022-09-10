using System.Linq;
using System.Threading.Tasks;
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

        public override async Task<Disciplina> Replace(long id, Disciplina disciplina)
        {
            var disciplinaModel = await base.Replace(id, disciplina);
            var alunoDisciplinasDAO = disciplinaModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};

            var alunoDisciplinas = alunoDisciplinasDAO.ToList();
            alunoDisciplinas.ForEach(async alunoDisciplina => {
                alunoDisciplina.Disciplina = disciplinaModel;
                await AlunoDisciplinaService.Replace(alunoDisciplina.Id, alunoDisciplina);
            });

            return disciplinaModel;
        }

        public override async Task Remove(long id)
        {
            var disciplinaModel = await Repository.Find(id);
            await base.Remove(id);

            if (!(disciplinaModel is null)) {
                var alunoDisciplinasDAO = disciplinaModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};
                var alunoDisciplinas = alunoDisciplinasDAO.ToList();
                alunoDisciplinas.ForEach(async alunoDisciplina => {
                    await AlunoDisciplinaService.Remove(alunoDisciplina.Id);
                });
            }
        }
    }
}
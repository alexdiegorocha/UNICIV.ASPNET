using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;


namespace GestaoEscolar.Web.Api.Service
{
    public class DisciplinaService : CRUDService<Disciplina>
    {
        public AlunoDisciplinaRepository AlunoDisciplinaRepository { get; set; }
        public DisciplinaService(DisciplinaRepository repository,
                                 AlunoDisciplinaRepository alunoDisciplinaRepository) : base(repository)
        {
            AlunoDisciplinaRepository = alunoDisciplinaRepository;
        }

        public override async Task<Disciplina> Replace(long id, Disciplina model)
        {
            var alunoDisciplinasAll = await AlunoDisciplinaRepository.All();
            var alunoDisciplinasPorDisciplina = alunoDisciplinasAll.Where(ad => ad.IdDisciplina == id);
            var alunoDisciplinasModels = alunoDisciplinasAll.ToList();
            model.AlunoDisciplinas = alunoDisciplinasModels;
            var result = await base.Replace(id, model);
            return result;
        }
    }
}
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class DisciplinaService : CRUDService<Disciplina>
    {
        public DisciplinaService(DisciplinaRepository repository) : base(repository)
        {
            
        }
    }
}
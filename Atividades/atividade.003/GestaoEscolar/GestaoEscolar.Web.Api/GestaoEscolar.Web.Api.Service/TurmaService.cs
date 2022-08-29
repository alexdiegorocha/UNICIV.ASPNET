using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class TurmaService : CRUDService<Turma>
    {
        public TurmaService(Repository<Turma> repository) : base(repository)
        {
            
        }
    }
}
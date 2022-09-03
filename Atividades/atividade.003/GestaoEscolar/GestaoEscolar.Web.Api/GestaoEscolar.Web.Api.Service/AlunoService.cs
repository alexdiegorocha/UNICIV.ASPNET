using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class AlunoService : CRUDService<Aluno>
    {
        public AlunoService(AlunoRepository repository) : base(repository)
        {
            
        }
    }
}
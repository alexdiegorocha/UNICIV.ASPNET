using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class AlunoRepository : Repository<Aluno>
    {
        public AlunoRepository(GestaoEscolarDB db) : base(db)
        {
        }
    }
}
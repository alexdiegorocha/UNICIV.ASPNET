using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class TurmaRepository : Repository<Turma>
    {
        public TurmaRepository(GestaoEscolarContext context) : base(context)
        {
        }
    }
}
using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class TurmaRepository : Repository<Turma>
    {
        public TurmaRepository(GestaoEscolarDB db) : base(db)
        {
        }
    }
}
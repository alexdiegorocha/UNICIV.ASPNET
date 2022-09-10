using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class AlunoDisciplinaRepository : Repository<AlunoDisciplina>
    {
        public AlunoDisciplinaRepository(GestaoEscolarContext context) : base(context)
        {
        }
    }
}
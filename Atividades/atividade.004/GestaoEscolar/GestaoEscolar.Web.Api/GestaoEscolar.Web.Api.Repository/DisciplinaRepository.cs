using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class DisciplinaRepository : Repository<Disciplina>
    {
        public DisciplinaRepository(GestaoEscolarContext context) : base(context)
        {
        }
    }
}
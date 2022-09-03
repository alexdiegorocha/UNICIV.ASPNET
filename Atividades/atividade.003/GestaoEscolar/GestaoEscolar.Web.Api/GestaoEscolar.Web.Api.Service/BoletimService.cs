using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class BoletimService : Service<AlunoDisciplina>
    {
        public BoletimService(AlunoDisciplinaRepository repository) : base(repository)
        {
            
        }
    }
}
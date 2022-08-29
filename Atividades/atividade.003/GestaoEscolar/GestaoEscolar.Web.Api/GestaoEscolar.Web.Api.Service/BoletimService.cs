using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class BoletimService : Service>:
    {
        public BoletimService(Repository<Boletim> repository) : base(repository)
        {
            
        }
    }
}
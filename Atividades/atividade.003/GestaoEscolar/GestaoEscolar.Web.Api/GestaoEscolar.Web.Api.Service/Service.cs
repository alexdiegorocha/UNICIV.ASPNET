using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public abstract class Service<TModel: Model>
    {
        protected Repository<TModel> Repository { get; set; }

        public Service(Repository<TModel> repository)
        {
            this.Repository = repository;
        }
    }
}
using GestaoEscolar.We. Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public abstract class CRUDService<TModel: Model> : Service<TModel>
    {
        public CRUDService(Repository<TModel> repository) : base(repository)
        {
            
        }
        public abstract TModel Add(TModel model);
        public abstract TModel Replace(long Id, TModel model);
        public abstract TModel Remove(long Id);
        public abstract TModel Single(long Id);
        public abstract TModel All();
    }
}
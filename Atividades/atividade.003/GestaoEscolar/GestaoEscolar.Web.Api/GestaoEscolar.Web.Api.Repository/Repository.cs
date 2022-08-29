using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public abstract class Repository<TModel: Model>
    {
        public abstract TModel Insert(TModel model);
        public abstract TModel Update(long Id, TModel model);
        public abstract TModel Delete(long Id);
        public abstract TModel Find(long Id);
        public abstract TModel All();
    }
}
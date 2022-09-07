using System;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public abstract class CRUDService<TModel> : Service<TModel>
    where TModel : Model.Model
    {
        public CRUDService(Repository<TModel> repository) : base(repository)
        {

        }
        public virtual TModel Add(TModel model)
        {
            var result = Repository.Insert(model);
            return result;
        }
        public virtual TModel Replace(long id, TModel model)
        {
            var result = Repository.Update(id, model);
            return result;
        }
        public virtual void Remove(long id)
        {
            Repository.Delete(id);
        }
        public virtual TModel Single(long id)
        {
            var result = Repository.Find(id);
            return result;
        }
        public virtual TModel[] All()
        {
            var result = Repository.All();
            return result;
        }
    }
}
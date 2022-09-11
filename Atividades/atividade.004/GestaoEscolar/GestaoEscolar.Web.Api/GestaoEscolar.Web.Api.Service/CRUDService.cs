using System;
using System.Threading.Tasks;
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
        public async virtual Task<TModel> Add(TModel model)
        {
            var result = await Repository.Insert(model);
            return result;
        }
        public async virtual Task<TModel> Replace(long id, TModel model)
        {
            var result = await Repository.Update(id, model);
            return result;
        }
        public async virtual Task Remove(long id)
        {
            await Repository.Delete(id);
        }
        public async virtual Task<TModel> Single(long id)
        {
            var result = Repository.Find(id);
            return await result;
        }
        public async virtual Task<TModel[]> All()
        {
            var result = await Repository.All();
            return result;
        }
    }
}
using System;
using System.Linq;
using System.Collections.Generic;
using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public abstract class Repository<TModel>
    where TModel : Model.Model
    {
        protected GestaoEscolarDB Db;
        protected List<TModel> DbSet;

        public Repository(GestaoEscolarDB db)
        {
            Db = db;
            DbSet = db.Set<TModel>();
        }
        public virtual TModel Insert(TModel model)
        {
            DbSet.Add(model);
            long index = DbSet.IndexOf(model);
            index++;

            model.Id = index;
            return model;
        }
        public virtual TModel Update(long id, TModel model)
        {
            var curModel = DbSet.FirstOrDefault(m => m.Id.Equals(id));
            var index = DbSet.IndexOf(curModel);

            model.Id = id;
            DbSet[index] = model;
            return model;
        }
        public virtual void Delete(long id)
        {
            var model = DbSet.FirstOrDefault(m => m.Id.Equals(id));
            DbSet.Remove(model);
        }
        public virtual TModel Find(long id)
        {
            var model = DbSet.FirstOrDefault(m => m.Id.Equals(id));
            return model;
        }
        public virtual TModel[] All()
        {
            var result = DbSet.ToArray();
            return result;
        }
    }
}
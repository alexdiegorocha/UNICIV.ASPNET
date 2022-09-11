using System;
using System.Linq;
using System.Collections.Generic;
using GestaoEscolar.Web.Api.Model;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Repository
{
    public abstract class Repository<TModel>
    where TModel : Model.Model
    {
        protected GestaoEscolarContext Context;
        protected DbSet<TModel> DbSet;

        public Repository(GestaoEscolarContext context)
        {
            Context = context;
            DbSet = Context.Set<TModel>();
        }
        public async virtual Task<TModel> Insert(TModel model)
        {
            await DbSet.AddAsync(model);
            await Context.SaveChangesAsync();
            return model;
        }
        public async virtual Task<TModel> Update(long id, TModel model)
        {
            var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
            Context.Entry(curModel)
                   .CurrentValues
                   .SetValues(model);

            await Context.SaveChangesAsync();
            return curModel;
        }
        public async virtual Task Delete(long id)
        {
            var model = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
            DbSet.Remove(model);
            await Context.SaveChangesAsync();
        }
        public async virtual Task<TModel> Find(long id)
        {
            var model = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
            return model;
        }
        public async virtual Task<TModel[]> All()
        {
            return await Task.Run(() => {
                var allElements = DbSet.AsEnumerable();
                var result = allElements.ToArray();
                return result;
            });
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class AlunoDisciplinaService : CRUDService<AlunoDisciplina>
    {
        public AlunoDisciplinaService(AlunoDisciplinaRepository repository) : base(repository)
        {
            
        }
    }
}
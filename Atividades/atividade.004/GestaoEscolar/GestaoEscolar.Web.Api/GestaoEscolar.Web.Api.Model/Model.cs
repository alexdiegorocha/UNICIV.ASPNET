using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestaoEscolar.Web.Api.Model
{
    public abstract class Model
    {
        public long Id { get; set; }
    }
}
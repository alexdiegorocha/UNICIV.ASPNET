using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestaoEscolar.Web.Api.Model
{
    public class Disciplina : Model
    {
        public string Descricao { get; set; }
        public virtual ICollection<AlunoDisciplina> AlunoDisciplinas { get; set; }
    }
}
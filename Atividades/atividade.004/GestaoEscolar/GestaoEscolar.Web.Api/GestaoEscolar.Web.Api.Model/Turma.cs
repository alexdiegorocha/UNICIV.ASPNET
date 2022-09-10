using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestaoEscolar.Web.Api.Model
{
    public class Turma : Model
    {
        public string Periodo { get; set; }
        public virtual ICollection<Aluno> Alunos { get; set; }
    }
}
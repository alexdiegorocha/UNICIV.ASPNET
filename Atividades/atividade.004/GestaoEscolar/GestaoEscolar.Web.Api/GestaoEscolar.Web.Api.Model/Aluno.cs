using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestaoEscolar.Web.Api.Model
{
    public class Aluno : Model
    {
        public string Nome { get; set; }
        public string Matricula { get; set; }
        public long IdTurma { get; set; }

        public virtual Turma Turma { get; set; }
        public virtual ICollection<AlunoDisciplina> AlunoDisciplinas { get; set; }
    }
}
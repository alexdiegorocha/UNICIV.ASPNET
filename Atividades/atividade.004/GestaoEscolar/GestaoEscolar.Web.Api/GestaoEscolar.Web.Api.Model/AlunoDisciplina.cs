using System.ComponentModel.DataAnnotations.Schema;

namespace GestaoEscolar.Web.Api.Model
{
    public class AlunoDisciplina : Model
    {
        public long IdAluno { get; set; }
        public long IdDisciplina { get; set; }
        public double Nota1 { get; set; }
        public double Nota2 { get; set; }
        public double Nota3 { get; set; }
        public double Nota4 { get; set; }

        public virtual Aluno Aluno { get; set; }
        public virtual Disciplina Disciplina { get; set; }
    }
}
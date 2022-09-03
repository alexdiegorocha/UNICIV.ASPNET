namespace GestaoEscolar.Web.Api.Model
{
    public class AlunoDisciplina : Model
    {
        public Aluno Aluno { get; set; }
        public Disciplina Disciplina { get; set; }
        
        public double Nota1 { get; set; }
        public double Nota2 { get; set; }
        public double Nota3 { get; set; }
        public double Nota4 { get; set; }
    }
}
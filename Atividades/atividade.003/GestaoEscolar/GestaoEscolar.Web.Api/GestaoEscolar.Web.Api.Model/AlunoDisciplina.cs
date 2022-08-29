namespace GestaoEscolar.Web.Api.Model
{
    public class AlunoDisciplina : Model
    {
        public Aluno Aluno { get; set; }
        public Disciplina Disciplina { get; set; }
        
        public Double Nota1 { get; set; }
        public Double Nota2 { get; set; }
        public Double Nota3 { get; set; }
        public Double Nota4 { get; set; }
    }
}
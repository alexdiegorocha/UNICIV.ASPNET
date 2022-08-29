namespace GestaoEscolar.Web.Api.Model
{
    public class Aluno : Model
    {
        public string Nome { get; set; }
        public string Matricula { get; set; }
        public Turma Turma { get; set; }
        public AlunoDisciplina[] AlunoDisciplinas { get; set; }
    }
}
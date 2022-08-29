namespace GestaoEscolar.Web.Api.Model
{
    public class Turma : Model
    {
        public string Periodo { get; set; }
        public Aluno[] Alunos { get; set; }
    }
}
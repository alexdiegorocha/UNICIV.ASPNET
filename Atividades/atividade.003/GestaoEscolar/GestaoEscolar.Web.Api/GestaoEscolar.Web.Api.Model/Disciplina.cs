namespace GestaoEscolar.Web.Api.Model
{
    public class Disciplina : Model
    {
        public string Descricao { get; set; }
        public AlunoDisciplina[] AlunoDisciplinas { get; set; }
    }
}
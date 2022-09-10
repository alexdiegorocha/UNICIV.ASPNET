using System.Linq;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Service
{
    public class BoletimService : Service<AlunoDisciplina>
    {
        public BoletimService(AlunoDisciplinaRepository repository) : base(repository)
        {
            
        }

        public async Task<AlunoDisciplina[]> AtualizarNotas(AlunoDisciplina[] alunoDisciplinas)
        {
            var currentAlunoDisciplinas = await Repository.All();
            var selectAlunoDisciplinas = currentAlunoDisciplinas
                .Join(alunoDisciplinas, 
                      a => a.Id, 
                      b => b.Id,
                      (a, b) => new { CurrentElement = a, ValueElement = b});

            var updateAlunoDisciplinas = selectAlunoDisciplinas.ToList();
            updateAlunoDisciplinas.ForEach(uad => {
                uad.CurrentElement.Nota1 = uad.ValueElement.Nota1;
                uad.CurrentElement.Nota2 = uad.ValueElement.Nota2;
                uad.CurrentElement.Nota3 = uad.ValueElement.Nota3;
                uad.CurrentElement.Nota4 = uad.ValueElement.Nota4;
            });

            var updatedAlunoDisciplinas = updateAlunoDisciplinas
                .Select(uad => uad.CurrentElement);
            
            var result = updatedAlunoDisciplinas.ToArray();
            return result;
        }

        public async Task<AlunoDisciplina[]> RetornarPorDisciplina(long id)
        {
            var alunoDisciplinas = await Repository.All();
            var alunoDisciplinasPorDisciplina = alunoDisciplinas
                .Where(ad => ad.Disciplina.Id.Equals(id));
            var result = alunoDisciplinasPorDisciplina.ToArray();
            return result;
        }

        public async Task<AlunoDisciplina[]> RetornarPorAluno(long id)
        {
            var alunoDisciplinas = await Repository.All();
            var alunoDisciplinasPorAluno = alunoDisciplinas
                .Where(ad => ad.Aluno.Id.Equals(id));
            var result = alunoDisciplinasPorAluno.ToArray();
            return result;
        }
    }
}
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Service
{
    public class AlunoService : CRUDService<Aluno>
    {
        private TurmaRepository TurmaRepository { get; set; }
        private AlunoDisciplinaService AlunoDisciplinaService {get; set;}
        public AlunoService(AlunoRepository repository,
                            TurmaRepository turmaRepository,
                            AlunoDisciplinaService alunoDisciplinaService) : base(repository)
        {
            TurmaRepository = turmaRepository;
            AlunoDisciplinaService = alunoDisciplinaService;
        }

        private async Task<Aluno> Map(Aluno model)
        {
            var turma = model.Turma;
            model.Turma = null;

            if (!(turma is null))
            {
                model.IdTurma = turma.Id;
            }

            return model;
        }

        public override async Task<Aluno> Add(Aluno model)
        {
            var alunoDisciplinas = model.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            model.AlunoDisciplinas = null;

            await Map(model);
            var alunoModel = await base.Add(model);

            var alunoDisciplinaList = alunoDisciplinas.ToList();
            alunoDisciplinaList.ForEach(async ad => {
                ad.Id = 0;
                ad.Aluno = alunoModel;
                await AlunoDisciplinaService.Add(ad);
            });

            var result = await base.Single(model.Id);
            return result;
        }

        public override async Task<Aluno> Replace(long id, Aluno model)
        {
            var alunoDisciplinas = model.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            model.AlunoDisciplinas = null;

            await Map(model);
            var alunoModel = await base.Replace(id, model);

            var alunoDisciplinaList = alunoDisciplinas.ToList();
            alunoDisciplinaList.ForEach(async ad => {
                
                ad.Aluno = alunoModel;

                if (ad.Id <= 0) {
                    ad.Id = 0;
                    await AlunoDisciplinaService.Add(ad);
                } else {
                    await AlunoDisciplinaService.Replace(ad.Id, ad);
                }
            });

            var result = await base.Single(model.Id);
            return result;
        }
    }
}
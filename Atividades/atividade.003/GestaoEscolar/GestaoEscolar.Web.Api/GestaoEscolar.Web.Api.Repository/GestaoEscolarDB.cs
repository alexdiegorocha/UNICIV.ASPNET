using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Collections.Generic;

using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class GestaoEscolarDB
    {
        public List<Aluno> Alunos { get; set; }
        public List<Disciplina> Disciplinas { get; set; }
        public List<AlunoDisciplina> AlunoDisciplinas { get; set; }
        public List<Turma> Turmas { get; set; }

        public GestaoEscolarDB()
        {
            Alunos = new List<Aluno>();
            Disciplinas = new List<Disciplina>();
            AlunoDisciplinas = new List<AlunoDisciplina>();
            Turmas = new List<Turma>();
        }

        public List<TModel> Set<TModel>() {
            var typeList = typeof(List<TModel>);
            var typedb = this.GetType();
            var dbProps = typedb.GetProperties();
            var propList = dbProps.FirstOrDefault(p => p.PropertyType == typeList);
            var valueList = propList.GetValue(this) as List<TModel>;
            return valueList;
        }
    }
}
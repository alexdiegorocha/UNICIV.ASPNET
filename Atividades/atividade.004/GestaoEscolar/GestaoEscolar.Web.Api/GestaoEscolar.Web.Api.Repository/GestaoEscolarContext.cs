using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class GestaoEscolarContext : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Disciplina> Disciplinas { get; set; }
        public DbSet<AlunoDisciplina> AlunoDisciplinas { get; set; }
        public DbSet<Turma> Turmas { get; set; }
        public GestaoEscolarContext(DbContextOptions<GestaoEscolarContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>(buildAction => {
                buildAction.ToTable("aluno");
                buildAction.HasKey(model => model.Id);

                buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.Nome)
                           .HasColumnName("nome");

                buildAction.Property(model => model.Matricula)
                           .HasColumnName("matricula");

                buildAction.Property(model => model.IdTurma)
                           .HasColumnName("idturma");


                buildAction.HasOne(detail => detail.Turma)
                           .WithMany(master => master.Alunos)
                           .HasForeignKey(model => model.IdTurma)
                           .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Disciplina>(buildAction => {
                buildAction.ToTable("disciplina");
                buildAction.HasKey(model => model.Id);

                buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.Descricao)
                           .HasColumnName("descricao");
            });

            modelBuilder.Entity<AlunoDisciplina>(buildAction => {
                buildAction.ToTable("alunodisciplina");
                buildAction.HasKey(model => model.Id);

                buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.IdAluno)
                           .HasColumnName("idaluno");

                buildAction.Property(model => model.IdDisciplina)
                           .HasColumnName("iddisciplina");

                buildAction.Property(model => model.Nota1)
                           .HasColumnName("nota1");

                buildAction.Property(model => model.Nota2)
                           .HasColumnName("nota2");

                buildAction.Property(model => model.Nota3)
                           .HasColumnName("nota3");

                buildAction.Property(model => model.Nota4)
                           .HasColumnName("nota4");

                buildAction.HasOne(detail => detail.Aluno)
                           .WithMany(master => master.AlunoDisciplinas)
                           .HasForeignKey(model => model.IdAluno)
                           .OnDelete(DeleteBehavior.Cascade);

                buildAction.HasOne(detail => detail.Disciplina)
                           .WithMany(master => master.AlunoDisciplinas)
                           .HasForeignKey(model => model.IdDisciplina)
                           .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Turma>(buildAction => {
                buildAction.ToTable("turma");
                buildAction.HasKey(model => model.Id);

                buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.Periodo)
                           .HasColumnName("periodo");
            });

            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }
    }
}
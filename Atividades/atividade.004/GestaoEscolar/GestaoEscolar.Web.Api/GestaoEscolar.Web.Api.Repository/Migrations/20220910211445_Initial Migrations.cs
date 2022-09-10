using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GestaoEscolar.Web.Api.Repository.Migrations
{
    public partial class InitialMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "disciplina",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    descricao = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_disciplina", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "turma",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    periodo = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_turma", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "aluno",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nome = table.Column<string>(type: "text", nullable: true),
                    matricula = table.Column<string>(type: "text", nullable: true),
                    idturma = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_aluno", x => x.id);
                    table.ForeignKey(
                        name: "FK_aluno_turma_idturma",
                        column: x => x.idturma,
                        principalTable: "turma",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "alunodisciplina",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idaluno = table.Column<long>(type: "bigint", nullable: false),
                    iddisciplina = table.Column<long>(type: "bigint", nullable: false),
                    nota1 = table.Column<double>(type: "double precision", nullable: false),
                    nota2 = table.Column<double>(type: "double precision", nullable: false),
                    nota3 = table.Column<double>(type: "double precision", nullable: false),
                    nota4 = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_alunodisciplina", x => x.id);
                    table.ForeignKey(
                        name: "FK_alunodisciplina_aluno_idaluno",
                        column: x => x.idaluno,
                        principalTable: "aluno",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_alunodisciplina_disciplina_iddisciplina",
                        column: x => x.iddisciplina,
                        principalTable: "disciplina",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateIndex(
                name: "IX_aluno_idturma",
                table: "aluno",
                column: "idturma");

            migrationBuilder.CreateIndex(
                name: "IX_alunodisciplina_idaluno",
                table: "alunodisciplina",
                column: "idaluno");

            migrationBuilder.CreateIndex(
                name: "IX_alunodisciplina_iddisciplina",
                table: "alunodisciplina",
                column: "iddisciplina");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "alunodisciplina");

            migrationBuilder.DropTable(
                name: "aluno");

            migrationBuilder.DropTable(
                name: "disciplina");

            migrationBuilder.DropTable(
                name: "turma");
        }
    }
}

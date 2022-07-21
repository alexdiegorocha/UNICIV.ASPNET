import { Model } from './model';
import { Aluno } from "./aluno.model";
import { Disciplina } from "./disciplina.model";

export interface AlunoDisciplina extends Model {
  Aluno?: Aluno;
  Disciplina?: Disciplina;
  Nota1?: Number;
  Nota2?: Number;
  Nota3?: Number;
  Nota4?: Number;
}

import { Model } from './model';
import { Aluno } from "./aluno.model";
import { Disciplina } from "./disciplina.model";

export interface AlunoDisciplina extends Model {
  aluno?: Aluno;
  disciplina?: Disciplina;
  nota1?: Number;
  nota2?: Number;
  nota3?: Number;
  nota4?: Number;
}

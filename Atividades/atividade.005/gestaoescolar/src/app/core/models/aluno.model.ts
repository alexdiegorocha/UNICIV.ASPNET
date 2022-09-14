import { Turma } from './turma.model';
import { AlunoDisciplina } from './alunodisciplina.model';
import { Model } from "./model";

export interface Aluno extends Model {
  nome?: string;
  matricula?: string;
  turma?: Turma;
  alunoDisciplinas?: AlunoDisciplina[];
}

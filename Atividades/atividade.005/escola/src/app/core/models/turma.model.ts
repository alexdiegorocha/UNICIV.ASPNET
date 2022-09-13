import { Aluno } from './aluno.model';
import { Model } from "./model";

export interface Turma extends Model {
  periodo?: string;
  alunos?: Aluno[];
}

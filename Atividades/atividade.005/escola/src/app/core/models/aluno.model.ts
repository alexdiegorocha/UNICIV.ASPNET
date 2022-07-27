import { AlunoDisciplina } from './alunodisciplina.model';
import { Model } from "./model";

export interface Aluno extends Model {
  Nome?: string;
  AlunoDisciplinas?: AlunoDisciplina[];
}

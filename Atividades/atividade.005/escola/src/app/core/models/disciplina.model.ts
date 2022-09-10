import { AlunoDisciplina } from "./alunodisciplina.model";
import { Model } from "./model";

export interface Disciplina extends Model {
  Nome?: string;
  AlunoDisciplinas?: AlunoDisciplina[];
}

import { Model } from './model';

export interface Aluno extends Model {
    id: number;
    nome: string;
    disciplina: string;
}

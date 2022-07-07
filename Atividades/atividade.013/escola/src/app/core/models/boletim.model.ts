import { Model } from './model';

export interface Boletim extends Model{
    id: number;
    nomeAluno: string;
    disciplina: string;
    nota: number;
}

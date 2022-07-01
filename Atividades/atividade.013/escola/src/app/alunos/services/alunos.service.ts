import { Injectable } from '@angular/core';
import { API_PATH } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './../interface/aluno';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Aluno[]>(`${API_PATH}alunos`)
    .pipe(
      first()
    );
  }

  getById(id:number){
    return this.httpClient.get<Aluno>(`${API_PATH}alunos/${id}`);
  }

  post(record: Aluno){
    console.log(record);
    return this.httpClient.post<Aluno>(`${API_PATH}alunos`, record);

  }

  put(record: Aluno){
    return this.httpClient.put<Aluno>(`${API_PATH}alunos/${record.id}`, record);
  }

  delete(alunoId: number){
    return this.httpClient.delete(`${API_PATH}alunos/${alunoId}`);
  }

}

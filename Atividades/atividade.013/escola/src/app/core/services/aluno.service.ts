import { HttpClient } from '@angular/common/http';
import { Aluno } from './../models/aluno.model';
import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends Service<Aluno> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'aluno');

  }
}

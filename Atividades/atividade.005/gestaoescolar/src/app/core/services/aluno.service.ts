import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Aluno } from '../models/aluno.model';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class AlunoService extends Service<Aluno> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'aluno');
  }
}

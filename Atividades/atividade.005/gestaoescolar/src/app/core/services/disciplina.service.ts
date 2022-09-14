import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Disciplina } from '../models/disciplina.model';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService extends Service<Disciplina> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'disciplina');
  }
}

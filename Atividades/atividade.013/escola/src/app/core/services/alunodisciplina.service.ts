import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Alunodisciplina } from '../models/alunodisciplina.model';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class AlunodisciplinaService extends Service<Alunodisciplina> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'alunodisciplina');
  }
}

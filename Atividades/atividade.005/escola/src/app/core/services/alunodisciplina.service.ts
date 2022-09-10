import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlunoDisciplina } from '../models/alunodisciplina.model';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class AlunoDisciplinaService extends Service<AlunoDisciplina> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'alunodisciplina');
  }
}

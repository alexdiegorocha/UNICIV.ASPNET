import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from '../models/turma.model';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class TurmaService extends Service<Turma> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'turma');
  }
}

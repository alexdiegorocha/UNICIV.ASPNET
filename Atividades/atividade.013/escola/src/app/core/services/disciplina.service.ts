import { HttpClient } from '@angular/common/http';
import { Disciplina } from './../models/disciplina.model';
import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService extends Service<Disciplina> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'disciplina');

  }
}

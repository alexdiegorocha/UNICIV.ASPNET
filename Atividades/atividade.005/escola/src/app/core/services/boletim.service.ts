import { first } from 'rxjs';
import { AlunoDisciplina } from 'src/app/core/models/alunodisciplina.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Boletim } from '../models/boletim.model';
import { Service } from './service';

import { API_PATH } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoletimService extends Service<Boletim> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'boletim');
  }

  getByDisciplina(id: number) {
    return this.httpClient.get<AlunoDisciplina[]>(`${API_PATH}api/${this.route}/disciplina/${id}`)
    .pipe(
      first()
    );
  }
}

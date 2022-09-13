import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Boletim } from '../models/boletim.model';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class BoletimService extends Service<Boletim> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'alunodisciplina');
  }
}

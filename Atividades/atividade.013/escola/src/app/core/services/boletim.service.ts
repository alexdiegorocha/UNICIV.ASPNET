import { HttpClient } from '@angular/common/http';
import { Boletim } from './../models/boletim.model';
import { Service } from './service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoletimService extends Service<Boletim> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'boletim');
  }

  override put(id: string, record: Boletim): Observable<Boletim> {
      throw new Error("Metodo não suportado!");
  }

  override delete(id: number): Observable<Object> {
    throw new Error("Metodo não suportado!");
  }

  override post(record: Boletim): Observable<Boletim> {
    throw new Error("Metodo não suportado!");
  }
}

import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

import { API_PATH } from '../../../environments/environment';

export abstract class Service<T> {

  constructor(private httpClient: HttpClient, private route: string) {

  }
  get() {
    return this.httpClient.get<T[]>(`${API_PATH}api/${this.route}`)
      .pipe(
        first()
      );
  }

  getById(id: number) {
    return this.httpClient.get<T>(`${API_PATH}api/${this.route}/${id}`)
    .pipe(
      first()
    );
  }

  post(record: T) {
    console.log(`${API_PATH}api/${this.route}`, record);
    return this.httpClient.post<T>(`${API_PATH}api/${this.route}`, record).pipe(
      first()
      );
  }

  put(id: number, record: T) {
    return this.httpClient.put<T>(`${API_PATH}api/${this.route}/${id}`, record);
  }

  delete(id: number) {
    return this.httpClient.delete<T>(`${API_PATH}api/${this.route}/${id}`);
  }
}

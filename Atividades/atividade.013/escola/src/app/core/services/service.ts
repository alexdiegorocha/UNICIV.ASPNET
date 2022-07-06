import { API_PATH } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';


export abstract class Service<T> {
  constructor(private httpClient: HttpClient, private route: string) {

  }
  get() {
    return this.httpClient.get<T[]>(`${API_PATH}${this.route}`)
      .pipe(
        first()
      );
  }

  getById(id: number) {
    return this.httpClient.get<T>(`${API_PATH}${this.route}/${id}`);
  }

  post(record: T) {
    console.log(`${API_PATH}${this.route}`, record);
    return this.httpClient.post<T>(`${API_PATH}${this.route}`, record).pipe(
      first()
      );

  }

  put(id: string, record: T) {
    return this.httpClient.put<T>(`${API_PATH}${this.route}/${id}`, record);
  }

  delete(id: number) {
    return this.httpClient.delete(`${API_PATH}${this.route}/${id}`);
  }
}

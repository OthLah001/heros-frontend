import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClientService } from '../services/custom-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private BASIC_PATH = 'heros';

  constructor(
    private http: CustomHttpClientService
  ) { }

  addHero(data: Record<string, string>): Observable<{message: string}> {
    return this.http.post(`${this.BASIC_PATH}/add`, data, true);
  }
}

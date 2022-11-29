import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClientService } from '../services/custom-http-client.service';
import { HeroListPaginationType, HeroType } from './heros.models';

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

  getListHeros(page: number, search: string, orderBy: string): Observable<HeroListPaginationType> {
    return this.http.get(
      `${this.BASIC_PATH}/list`, true, { page, search, orderBy }
    );
  }

  getHero(id: number): Observable<HeroType> {
    return this.http.get(`${this.BASIC_PATH}/get/${id}`, true);
  }
}

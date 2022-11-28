import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClientService } from '../services/custom-http-client.service';
import { LoginType } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private BASIC_PATH = 'users';

  constructor(
    private http: CustomHttpClientService
  ) { }

  login(data: Record<string, string>): Observable<LoginType> {
    return this.http.post(`${this.BASIC_PATH}/login`, data);
  }

  signup(data: Record<string, string>): Observable<LoginType> {
    return this.http.post(`${this.BASIC_PATH}/signup`, data);
  }
}

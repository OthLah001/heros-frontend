import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TOKEN_KEY } from '../utils/constants';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserActions } from '../users/store';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {
  private BASE_URL = environment.apiUrl;
  private BAD_TOKEN_PERMISSION_MESSAGE = "Authentication credentials were not provided.";

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private store: Store,
    private router: Router
  ) { }

  post(url: string, params: { [key: string]: any }, needsAuth: boolean = false): Observable<any> {
    return this.http.post(`${this.BASE_URL}/${url}${this.getAuthPath(needsAuth)}`, params).pipe(
      catchError(err => {
        if (err.error.detail === this.BAD_TOKEN_PERMISSION_MESSAGE) {
          this.logout();
        }
        return throwError(err);
      })
    );
  }

  get(url: string, needsAuth: boolean = false, params = {}): Observable<any> {
    let options = {
      params
    }
    return this.http.get(`${this.BASE_URL}/${url}${this.getAuthPath(needsAuth)}`, options).pipe(
      catchError(err => {
        if (err.error.detail === this.BAD_TOKEN_PERMISSION_MESSAGE) {
          this.logout();
        }
        return throwError(err);
      })
    );
  }

  getAuthPath(isAuth: boolean) {
    return isAuth ? `/${this.cookieService.get(TOKEN_KEY)}/` : '/';
  }

  async checkAuth() {
    try {
      const token = this.cookieService.get(TOKEN_KEY);
      if (token) {
        await this.get(`users/check_token/${token}`).toPromise();
        const init_rsp = await this.get(`users/init/${token}`).toPromise();
        this.store.dispatch(UserActions.updateUsersStore({ data: { login: true, user: init_rsp.user } }));
      }
    } catch (error: any) {
      this.cookieService.delete(TOKEN_KEY, '/');
    }
  }

  logout() {
    this.cookieService.delete(TOKEN_KEY, '/');
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/user/login']);
  }
}

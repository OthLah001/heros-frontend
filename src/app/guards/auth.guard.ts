import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { UserState } from '../users/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.store.pipe(
      select(UserState.isLoggedIn),
      map(isLoggedIn => {
        if (!isLoggedIn)  this.router.navigate(['/user/login']);
        return true;
      })
    );
  }

}

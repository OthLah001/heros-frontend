import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, map, switchMap, throwError } from "rxjs";
import { HerosActions } from ".";
import { HerosService } from "../heros.service";

@Injectable()
export class HerosEffects {
  constructor(
    private herosService: HerosService,
    private actions$: Actions,
    private store: Store
  ) {}


  @Effect()
  loadHeros$ = this.actions$.pipe(
    ofType(HerosActions.loadHeros),
    map((action) => action.data),
    switchMap((params) => this.herosService.getListHeros(params.page, params.search, params.orderBy)),
    map(response => {
      return HerosActions.loadHerosSuccess({ data: { heros: response.results } });
    }),
    catchError(err => {
      this.store.dispatch(HerosActions.loadHerosFailed());
      return throwError(err);
    })
  )
}

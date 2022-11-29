import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, Observable, of } from 'rxjs';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { HeroListType } from '../heros.models';
import { HerosActions, HerosState } from '../store';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss']
})
export class HerosListComponent implements OnInit, OnDestroy {

  public heros$: Observable<HeroListType> = of();
  public canLoadHeros: boolean = true;
  public loadingData: boolean = true;

  public searchFC: FormControl = new FormControl('');
  public orderByFC: FormControl = new FormControl(true);

  private page: number = 0;

  constructor(
    private store: Store,
    private actions$: Actions,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.heros$ = this.store.select(HerosState.herosSelector);

    this.loadHeros();

    this.actions$.pipe(
      ofType(HerosActions.loadHerosSuccess)
    ).subscribe(
      data => this.loadingData = false
    );

    this.actions$.pipe(
      ofType(HerosActions.loadHerosFailed)
    ).subscribe(
      data => this.canLoadHeros = false
    );

    merge(
      this.searchFC.valueChanges,
      this.orderByFC.valueChanges
    ).subscribe(
      value => {
        this.loadingData = true;
        this.canLoadHeros = true;
        this.page = 0;
        this.store.dispatch(HerosActions.resetHerosList());
        this.loadHeros();
      }
    );
  }

  loadHeros() {
    this.store.dispatch(HerosActions.loadHeros({ data: { page: ++this.page, search: this.searchFC.value, orderBy: this.orderByFC.value ? 'name' : 'powers' } }));
  }

  ngOnDestroy() {
    this.store.dispatch(HerosActions.resetHerosList());
  }

  showHeroProfile(id: number) {
    this.dialog.open(
      HeroProfileComponent,
      {
        data: {
          id
        },
        height: '500px',
        width: '500px'
      }
    );
  }
}

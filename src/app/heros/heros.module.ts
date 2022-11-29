import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosListComponent } from './heros-list/heros-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { HerosEffects } from './store/effetcs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HerosService } from './heros.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: HerosListComponent,
  },
  {
    path: 'add',
    component: HeroAddComponent,
  }
]

@NgModule({
  declarations: [
    HerosListComponent,
    HeroAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    EffectsModule.forFeature([HerosEffects])
  ],
  providers: [
    HerosService,
    EffectsModule
  ]
})
export class HerosModule { }

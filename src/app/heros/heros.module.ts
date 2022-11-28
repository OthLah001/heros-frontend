import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosListComponent } from './heros-list/heros-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: HerosListComponent,
  }
]

@NgModule({
  declarations: [
    HerosListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HerosModule { }

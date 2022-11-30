import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomHttpClientService } from 'src/app/services/custom-http-client.service';
import { UserState } from 'src/app/users/store';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public fullName: string = '';

  constructor(
    private store: Store,
    private http: CustomHttpClientService
  ) {}

  ngOnInit() {
    this.store.select(UserState.userFullName)
      .subscribe(
        fullName => this.fullName = fullName
      );
  }

  onLogout() {
    this.http.logout();
  }
}

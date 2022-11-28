import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { TOKEN_KEY } from 'src/app/utils/constants';
import { UserActions } from '../store';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public form: FormGroup = new FormGroup({});
  public generalError: boolean = false;

  constructor(
    private usersService: UsersService,
    private cookieService: CookieService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.generalError = false;
    this.usersService.signup(this.form.value).subscribe(
      data => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        this.cookieService.set(TOKEN_KEY, data.token, date, '/');
        console.log('data => ', data)
        this.store.dispatch(UserActions.updateAccountsStore({ data: { login: true, user: data.user } }));
        this.router.navigate(['/heros/list']);
      },
      error => this.generalError = true
    );
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HerosService } from '../heros.service';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    description: new FormControl(null, [Validators.maxLength(500)]),
    powers: new FormControl(null, [Validators.required, Validators.maxLength(255)])
  });

  public generalError: boolean = false;
  public addedCorrectly: boolean = false;

  constructor(
    private herosService: HerosService
  ) {}

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    this.generalError = false;
    this.addedCorrectly = false;
    this.herosService.addHero(this.form.value).subscribe(
      data => {
        this.form.reset();
        this.addedCorrectly = true;
      },
      error => this.generalError = true
    )
  }
}

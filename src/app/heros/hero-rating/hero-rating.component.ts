import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HerosService } from '../heros.service';

@Component({
  selector: 'app-hero-rating',
  templateUrl: './hero-rating.component.html',
  styleUrls: ['./hero-rating.component.scss']
})
export class HeroRatingComponent implements OnInit{
  @Input() heroId: number = 0;
  @Input() rating: number = 0;

  public ratingFC: FormControl = new FormControl();

  constructor(
    private herosService: HerosService
  ) {}

  ngOnInit() {
    this.ratingFC.setValue(this.rating);

    this.ratingFC.valueChanges.subscribe(
      value => this.rateHero(value)
    );
  }

  rateHero(newRating: number) {
    this.herosService.rateHero(this.heroId, newRating).subscribe()
  }

}

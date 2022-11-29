import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroType } from '../heros.models';
import { HerosService } from '../heros.service';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit {

  public hero: HeroType | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    private herosService: HerosService
  ) {}

  ngOnInit(): void {
    this.herosService.getHero(this.data.id).subscribe(
      hero => this.hero = hero
    );
  }
}

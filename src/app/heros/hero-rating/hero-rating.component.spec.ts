import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRatingComponent } from './hero-rating.component';

describe('HeroRatingComponent', () => {
  let component: HeroRatingComponent;
  let fixture: ComponentFixture<HeroRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

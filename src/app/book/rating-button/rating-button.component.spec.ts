import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingButtonComponent } from './rating-button.component';

describe('RatingButtonComponent', () => {
  let component: RatingButtonComponent;
  let fixture: ComponentFixture<RatingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntryComponent } from './book-list-element.component';

describe('ListEntryComponent', () => {
  let component: ListEntryComponent;
  let fixture: ComponentFixture<ListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

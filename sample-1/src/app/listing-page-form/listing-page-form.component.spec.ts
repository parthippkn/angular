import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPageFormComponent } from './listing-page-form.component';

describe('ListingPageFormComponent', () => {
  let component: ListingPageFormComponent;
  let fixture: ComponentFixture<ListingPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

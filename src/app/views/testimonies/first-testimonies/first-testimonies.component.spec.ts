import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestimoniesComponent } from './first-testimonies.component';

describe('FirstTestimoniesComponent', () => {
  let component: FirstTestimoniesComponent;
  let fixture: ComponentFixture<FirstTestimoniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTestimoniesComponent]
    });
    fixture = TestBed.createComponent(FirstTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

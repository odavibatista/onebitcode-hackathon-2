import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTestimoniesComponent } from './second-testimonies.component';

describe('SecondTestimoniesComponent', () => {
  let component: SecondTestimoniesComponent;
  let fixture: ComponentFixture<SecondTestimoniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondTestimoniesComponent]
    });
    fixture = TestBed.createComponent(SecondTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

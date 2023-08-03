import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClassComponent } from './single-class.component';

describe('SingleClassComponent', () => {
  let component: SingleClassComponent;
  let fixture: ComponentFixture<SingleClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleClassComponent]
    });
    fixture = TestBed.createComponent(SingleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

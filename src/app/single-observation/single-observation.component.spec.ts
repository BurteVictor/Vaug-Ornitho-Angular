import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleObservationComponent } from './single-observation.component';

describe('SingleObservationComponent', () => {
  let component: SingleObservationComponent;
  let fixture: ComponentFixture<SingleObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

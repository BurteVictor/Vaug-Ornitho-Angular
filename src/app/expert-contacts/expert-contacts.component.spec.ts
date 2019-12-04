import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertContactsComponent } from './expert-contacts.component';

describe('ExpertContactsComponent', () => {
  let component: ExpertContactsComponent;
  let fixture: ComponentFixture<ExpertContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

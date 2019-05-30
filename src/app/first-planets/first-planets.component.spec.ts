import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPlanetsComponent } from './first-planets.component';

describe('FirstPlanetsComponent', () => {
  let component: FirstPlanetsComponent;
  let fixture: ComponentFixture<FirstPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

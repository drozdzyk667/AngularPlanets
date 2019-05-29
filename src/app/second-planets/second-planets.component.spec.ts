import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPlanetsComponent } from './second-planets.component';

describe('SecondPlanetsComponent', () => {
  let component: SecondPlanetsComponent;
  let fixture: ComponentFixture<SecondPlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPlanetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

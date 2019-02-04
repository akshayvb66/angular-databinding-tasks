import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6component2Component } from './scenario6component2.component';

describe('Scenario6component2Component', () => {
  let component: Scenario6component2Component;
  let fixture: ComponentFixture<Scenario6component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

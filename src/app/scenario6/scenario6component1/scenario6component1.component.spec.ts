import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6component1Component } from './scenario6component1.component';

describe('Scenario6component1Component', () => {
  let component: Scenario6component1Component;
  let fixture: ComponentFixture<Scenario6component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

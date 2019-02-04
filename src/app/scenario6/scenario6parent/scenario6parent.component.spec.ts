import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6parentComponent } from './scenario6parent.component';

describe('Scenario6parentComponent', () => {
  let component: Scenario6parentComponent;
  let fixture: ComponentFixture<Scenario6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

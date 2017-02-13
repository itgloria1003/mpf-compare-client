/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FundTypeChartComponent } from './fund-type-chart.component';

describe('FundTypeChartComponent', () => {
  let component: FundTypeChartComponent;
  let fixture: ComponentFixture<FundTypeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTypeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

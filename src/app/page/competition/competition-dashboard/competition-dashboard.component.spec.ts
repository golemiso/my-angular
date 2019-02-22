import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDashboardComponent } from './competition-dashboard.component';

describe('CompetitionDashboardComponent', () => {
  let component: CompetitionDashboardComponent;
  let fixture: ComponentFixture<CompetitionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBattlesComponent } from './create-battles.component';

describe('CreateBattlesComponent', () => {
  let component: CreateBattlesComponent;
  let fixture: ComponentFixture<CreateBattlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBattlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

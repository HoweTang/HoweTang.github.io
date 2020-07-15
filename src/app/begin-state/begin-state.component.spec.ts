import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginStateComponent } from './begin-state.component';

describe('BeginStateComponent', () => {
  let component: BeginStateComponent;
  let fixture: ComponentFixture<BeginStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

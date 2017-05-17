import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaComponent } from './fecha.component';

describe('FechaComponent', () => {
  let component: FechaComponent;
  let fixture: ComponentFixture<FechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

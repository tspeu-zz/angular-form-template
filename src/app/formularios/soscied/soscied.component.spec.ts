import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosciedComponent } from './soscied.component';

describe('SosciedComponent', () => {
  let component: SosciedComponent;
  let fixture: ComponentFixture<SosciedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosciedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosciedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

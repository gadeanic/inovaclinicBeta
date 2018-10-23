import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasCitasComponent } from './citas-citas.component';

describe('CitasCitasComponent', () => {
  let component: CitasCitasComponent;
  let fixture: ComponentFixture<CitasCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

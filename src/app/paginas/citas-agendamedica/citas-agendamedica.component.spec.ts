import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasAgendamedicaComponent } from './citas-agendamedica.component';

describe('CitasAgendamedicaComponent', () => {
  let component: CitasAgendamedicaComponent;
  let fixture: ComponentFixture<CitasAgendamedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasAgendamedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasAgendamedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

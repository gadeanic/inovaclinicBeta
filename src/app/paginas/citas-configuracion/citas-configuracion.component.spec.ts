import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasConfiguracionComponent } from './citas-configuracion.component';

describe('CitasConfiguracionComponent', () => {
  let component: CitasConfiguracionComponent;
  let fixture: ComponentFixture<CitasConfiguracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasConfiguracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

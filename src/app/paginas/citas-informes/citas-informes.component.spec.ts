import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasInformesComponent } from './citas-informes.component';

describe('CitasInformesComponent', () => {
  let component: CitasInformesComponent;
  let fixture: ComponentFixture<CitasInformesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasInformesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

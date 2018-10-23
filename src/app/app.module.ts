//añadimos esta libreria para poder enrutar 
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';
import { from } from 'rxjs';
import { CitasCitasComponent } from './paginas/citas-citas/citas-citas.component';
import { CitasConfiguracionComponent } from './paginas/citas-configuracion/citas-configuracion.component';
import { CitasRecepcionComponent } from './paginas/citas-recepcion/citas-recepcion.component';
import { CitasAgendamedicaComponent } from './paginas/citas-agendamedica/citas-agendamedica.component';
import { CitasInformesComponent } from './paginas/citas-informes/citas-informes.component';
import { Error404Component } from './paginas/error404/error404.component';

const routes: Routes = [
  { path: 'citas-citas', component:CitasCitasComponent },
  { path: 'error404', component:Error404Component },
  { path: 'citas-configuracion', component:CitasConfiguracionComponent },
  { path: 'citas-citas', component:CitasCitasComponent },
  { path: 'citas-recepcion', component:CitasRecepcionComponent },
  { path: 'citas-agendamedica', component:CitasAgendamedicaComponent },
  { path: 'citas-informes', component:CitasInformesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/error404', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    CitasCitasComponent,
    CitasConfiguracionComponent,
    CitasRecepcionComponent,
    CitasAgendamedicaComponent,
    CitasInformesComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //esto la añadimos para poder enrutar
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

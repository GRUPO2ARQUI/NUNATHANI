import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadListarComponent } from './component/especialidad/especialidad-listar/especialidad-listar.component';
import { EspecialidadComponent } from './component/especialidad/especialidad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EspecialidadInsertarComponent } from './component/especialidad/especialidad-insertar/especialidad-insertar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EspecialidadDialogoComponent } from './component/especialidad/especialidad-listar/especialidad-dialogo/especialidad-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { EstadoInsertarComponent } from './component/estado/estado-insertar/estado-insertar.component'
import { EstadoComponent } from './component/estado/estado.component';
import { EstadoListarComponent } from './component/estado/estado-listar/estado-listar.component';
import { EstadoDialogoComponent } from './component/estado/estado-listar/estado-dialogo/estado-dialogo.component';



@NgModule({
  declarations: [
    AppComponent,
    
    EspecialidadListarComponent,
    EspecialidadComponent,
    EspecialidadInsertarComponent,
    EspecialidadDialogoComponent,
    
    EstadoComponent,
    EstadoListarComponent,
    EstadoInsertarComponent,
    EstadoDialogoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

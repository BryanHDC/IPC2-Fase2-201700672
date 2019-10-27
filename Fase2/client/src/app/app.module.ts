import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudiantesService } from './services/estudiantes.service'
import { HttpClientModule } from '@angular/common/http';
import { AuxFormComponent } from './components/aux-form/aux-form.component';
import { AuxListComponent } from './components/aux-list/aux-list.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EstudianteFormComponent,
    EstudianteListComponent,
    AuxFormComponent,
    AuxListComponent,
    CursoListComponent,
    CursoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EstudiantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

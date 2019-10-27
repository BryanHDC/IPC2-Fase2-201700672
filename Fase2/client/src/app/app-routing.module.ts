import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component'
import {  EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component'
import { AuxListComponent } from './components/aux-list/aux-list.component'
import { AuxFormComponent } from './components/aux-form/aux-form.component'
import { CursoFormComponent } from './components/curso-form/curso-form.component'
import { CursoListComponent } from './components/curso-list/curso-list.component'
const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: 'full'
  },
  {
    path: "users",
    component: EstudianteListComponent
  },
  {
    path: "users/add",
    component: EstudianteFormComponent
  },
  {
    path: "users/edit/:id",
    component: EstudianteFormComponent
  },
  {
    path: "auxs",
    component: AuxListComponent
  },
  {
    path: "auxs/add",
    component: AuxFormComponent
  },
  {
    path: "auxs/edit/:id",
    component: AuxFormComponent
  },
  {
    path: "cursos",
    component: CursoListComponent
  },
  {
    path: "cursos/add",
    component: CursoFormComponent
  },
  {
    path: "cursos/edit/:id",
    component: CursoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

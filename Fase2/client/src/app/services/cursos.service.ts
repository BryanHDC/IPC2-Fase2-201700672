import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/Curso'
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_URL='http://localhost:3000/api'
  constructor(private http: HttpClient) {

  }
  getCursos(){
    return this.http.get(`${this.API_URL}/cursos`);
  }
  getCurso(id: string){
    return this.http.get(`${this.API_URL}/cursos/${id}`);
  }
  deleteCurso(id: string){
    return this.http.delete(`${this.API_URL}/cursos/${id}`);
  }
  updateCurso(id,updatedcurso){
    return this.http.put(`${this.API_URL}/cursos/${id}`,updatedcurso);
  }
  saveCurso(curso: Curso){
    return this.http.post(`${this.API_URL}/cursos`,curso)
  }
}

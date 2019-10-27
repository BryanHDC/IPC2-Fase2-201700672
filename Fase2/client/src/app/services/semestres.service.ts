import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Semestre } from '../models/Semestre'

@Injectable({
  providedIn: 'root'
})
export class SemestresService {

  API_URL='http://localhost:3000/api'
  constructor(private http: HttpClient) {

  }
  getSemestres(){
    return this.http.get(`${this.API_URL}/semestres`);
  }
  getSemestre(id: string){
    return this.http.get(`${this.API_URL}/semestres/${id}`);
  }
  deleteSemestre(id: string){
    return this.http.delete(`${this.API_URL}/semestres/${id}`);
  }
  updateSemestre(id,updatedsemestre){
    return this.http.put(`${this.API_URL}/semestres/${id}`,updatedsemestre);
  }
  saveSemestre(semestre: Semestre){
    return this.http.post(`${this.API_URL}/semestres`,semestre)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../models/Horario'
@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  API_URL='http://localhost:3000/api'
  constructor(private http: HttpClient) {

  }
  getHorarios(){
    return this.http.get(`${this.API_URL}/horarios`);
  }
  getHorario(id: string){
    return this.http.get(`${this.API_URL}/horarios/${id}`);
  }
  deleteHorario(id: string){
    return this.http.delete(`${this.API_URL}/horarios/${id}`);
  }
  updateHorario(id,updatedhorario){
    return this.http.put(`${this.API_URL}/horarios/${id}`,updatedhorario);
  }
  saveHorario(horario: Horario){
    return this.http.post(`${this.API_URL}/horarios`,horario)
  }
}

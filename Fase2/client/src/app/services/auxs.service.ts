import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aux } from '../models/Aux'
@Injectable({
  providedIn: 'root'
})
export class AuxsService {
  API_URL='http://localhost:3000/api'
  constructor(private http: HttpClient) {

  }
  getAuxs(){
    return this.http.get(`${this.API_URL}/auxiliares`);
  }
  getAux(id: string){
    return this.http.get(`${this.API_URL}/auxiliares/${id}`);
  }
  deleteAux(id: string){
    return this.http.delete(`${this.API_URL}/auxiliares/${id}`);
  }
  updateAux(id,updatedaux){
    return this.http.put(`${this.API_URL}/auxiliares/${id}`,updatedaux);
  }
  saveAux(aux: Aux){
    return this.http.post(`${this.API_URL}/auxiliares`,aux)
  }
}

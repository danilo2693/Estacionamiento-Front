import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { RegistroVehiculo } from '../modelos/registrovehiculo';
import { Observable } from 'rxjs';


const URL = 'http://localhost:3000/estacionamiento';
const URL_RETIRAR = 'http://localhost:3000/estacionamiento/salir/';

@Injectable({
  providedIn: 'root'
})
export class RegistroVehiculoService {

   constructor(private http: HttpClient) {
  }

  crearRegistroVehiculo(registroVehiculo: RegistroVehiculo) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(URL, JSON.stringify(registroVehiculo), {headers});
  }

  mostrar(): Observable<any> {
    return this.http.get(URL);
  }

  retirar(placaValor: string) {
      return this.http.put(URL_RETIRAR + placaValor, {});
  }
}

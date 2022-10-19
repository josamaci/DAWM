import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class FuenteService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get('https://dataserverdawm.herokuapp.com/noticias/')
  }
}

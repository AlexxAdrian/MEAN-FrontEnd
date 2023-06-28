import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  url = 'http://localhost:4000/api/jugadores/';

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarJugador(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarJugador(jugador: Jugador): Observable<any> {
    return this.http.post(this.url, jugador);
  }

  obtenerJugador(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarJugador(id: string, jugador: Jugador): Observable<any> {
    return this.http.put(this.url + id, jugador);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  crearReserva(data: { id_usuario: number; id_libro: number }): Observable<any> {
    return this.http.post(`${this.api}/reservas`, data);
  }

  listarPorUsuario(id_usuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/reservas/usuario/${id_usuario}`);
  }

  cancelar(id: number): Observable<any> {
    return this.http.put(`${this.api}/reservas/${id}/cancelar`, {});
  }

  devolver(id: number): Observable<any> {
    return this.http.put(`${this.api}/reservas/${id}/devolver`, {});
  }
}
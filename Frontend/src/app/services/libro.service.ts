import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerDisponibles(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.api}/libros/disponibles`);
  }
}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionService {
  private refrescarSource = new Subject<void>();
  refrescar$ = this.refrescarSource.asObservable();

  notificarCambio(): void {
    this.refrescarSource.next();
  }
}
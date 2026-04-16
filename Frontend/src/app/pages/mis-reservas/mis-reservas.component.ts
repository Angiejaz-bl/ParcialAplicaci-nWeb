import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ReservaService } from '../../services/reserva.service';
import { ActualizacionService } from '../../services/actualizacion.service';

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit, OnDestroy {
  reservas: any[] = [];
  usuarioId: number = 1;
  private sub?: Subscription;

  constructor(
    private reservaService: ReservaService,
    private actualizacionService: ActualizacionService
  ) {}

  ngOnInit(): void {
    this.cargarReservas();

    this.sub = this.actualizacionService.refrescar$.subscribe(() => {
      this.cargarReservas();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  cargarReservas(): void {
    this.reservaService.listarPorUsuario(this.usuarioId).subscribe({
      next: (data: any[]) => {
        this.reservas = data;
      },
      error: (err: any) => {
        console.error('ERROR AL CARGAR RESERVAS:', err);
      }
    });
  }

  cancelar(id: number): void {
    this.reservaService.cancelar(id).subscribe({
      next: () => {
        this.cargarReservas();
        this.actualizacionService.notificarCambio();
      },
      error: (err: any) => {
        console.error('ERROR AL CANCELAR:', err);
      }
    });
  }

  devolver(id: number): void {
    this.reservaService.devolver(id).subscribe({
      next: () => {
        this.cargarReservas();
        this.actualizacionService.notificarCambio();
      },
      error: (err: any) => {
        console.error('ERROR AL DEVOLVER:', err);
      }
    });
  }

  formatearEstado(estado: string): string {
    if (!estado) return '';
    return estado.toLowerCase();
  }
}
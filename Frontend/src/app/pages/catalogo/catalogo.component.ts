import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Libro } from '../../interfaces/libro.interface';
import { LibroService } from '../../services/libro.service';
import { ReservaService } from '../../services/reserva.service';
import { ActualizacionService } from '../../services/actualizacion.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, OnDestroy {
  libros: Libro[] = [];
  usuarioId: number = 1;
  private sub?: Subscription;

  constructor(
    private libroService: LibroService,
    private reservaService: ReservaService,
    private actualizacionService: ActualizacionService
  ) {}

  ngOnInit(): void {
    this.cargarLibros();

    this.sub = this.actualizacionService.refrescar$.subscribe(() => {
      this.cargarLibros();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  cargarLibros(): void {
    this.libroService.obtenerDisponibles().subscribe({
      next: (data: Libro[]) => {
        this.libros = data;
      },
      error: (err: any) => {
        console.error('ERROR AL CARGAR LIBROS:', err);
      }
    });
  }

  reservar(idLibro: number): void {
    this.reservaService.crearReserva({
      id_usuario: this.usuarioId,
      id_libro: idLibro
    }).subscribe({
      next: () => {
        this.cargarLibros();
        this.actualizacionService.notificarCambio();
      },
      error: (err: any) => {
        console.error('ERROR AL RESERVAR:', err);
        alert('Error al reservar');
      }
    });
  }
}
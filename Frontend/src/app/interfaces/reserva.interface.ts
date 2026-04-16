export interface Reserva {
  id_reserva: number;
  id_usuario: number;
  id_libro: number;
  fecha_reserva: string;
  fecha_devolucion?: string;
  estado: "ACTIVA" | "CANCELADA" | "DEVUELTA";
}
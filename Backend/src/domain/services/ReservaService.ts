import { ReservaRepository } from "../../infrastructure/repositories/ReservaRepository";

export class ReservaService {
  private repo: ReservaRepository;

  constructor() {
    this.repo = new ReservaRepository();
  }

  crearReserva(data: {
    id_usuario: number;
    id_libro: number;
  }) {
    return this.repo.crear({
      id_usuario: data.id_usuario,
      id_libro: data.id_libro,
      estado: "ACTIVA"
    });
  }

  listarReservasUsuario(id_usuario: number) {
    return this.repo.listarPorUsuario(id_usuario);
  }

  cancelar(id: number) {
    return this.repo.cancelar(id);
  }

  devolver(id: number) {
    return this.repo.devolver(id);
  }
}
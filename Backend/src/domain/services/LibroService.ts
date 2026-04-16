import { LibroRepository } from "../../infrastructure/repositories/LibroRepository";

export class LibroService {
  private repo = new LibroRepository();

  crear(data: any) {
    return this.repo.crear(data);
  }

  listar() {
    return this.repo.listar();
  }

  buscarPorId(id: number) {
    return this.repo.buscarPorId(id);
  }

  actualizar(id: number, data: any) {
    return this.repo.actualizar(id, data);
  }

  eliminarLibro(id: number) {
    return this.repo.eliminar(id);
  }

  obtenerDisponibles() {
    return this.repo.disponibles();
  }
}
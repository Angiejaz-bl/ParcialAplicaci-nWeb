import { CategoriaRepository } from "../../infrastructure/repositories/CategoriaRepository";

export class CategoriaService {
  constructor(private categoriaRepository: CategoriaRepository) {}

  async crear(data: { nombre: string; descripcion?: string | null }) {
    if (!data.nombre || data.nombre.trim() === "") {
      throw new Error("El nombre de la categoría es obligatorio");
    }

    return await this.categoriaRepository.crear(data);
  }

  async listar() {
    return await this.categoriaRepository.listar();
  }

  async actualizar(
    id: number,
    data: { nombre: string; descripcion?: string | null }
  ) {
    if (!data.nombre || data.nombre.trim() === "") {
      throw new Error("El nombre de la categoría es obligatorio");
    }

    const categoriaActualizada = await this.categoriaRepository.actualizar(id, data);

    if (!categoriaActualizada) {
      throw new Error("Categoría no encontrada");
    }

    return categoriaActualizada;
  }

  async eliminar(id: number) {
    const categoriaEliminada = await this.categoriaRepository.eliminar(id);

    if (!categoriaEliminada) {
      throw new Error("Categoría no encontrada");
    }

    return categoriaEliminada;
  }
}
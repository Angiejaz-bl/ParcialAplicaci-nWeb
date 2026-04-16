import { Categoria } from "../models/Categoria";

export class CategoriaRepository {
  async crear(data: { nombre: string; descripcion?: string | null }) {
    return await Categoria.create({
      nombre: data.nombre,
      descripcion: data.descripcion ?? null
    });
  }

  async listar() {
    return await Categoria.findAll();
  }

  async buscarPorId(id: number) {
    return await Categoria.findByPk(id);
  }

  async actualizar(
    id: number,
    data: { nombre: string; descripcion?: string | null }
  ) {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return null;
    }

    await categoria.update({
      nombre: data.nombre,
      descripcion: data.descripcion ?? null
    });

    return categoria;
  }

  async eliminar(id: number) {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return null;
    }

    await categoria.destroy();
    return categoria;
  }
}
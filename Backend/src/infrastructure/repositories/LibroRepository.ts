import { Libro } from "../models/Libro";
import { Reserva } from "../models/Reserva";
import { Op } from "sequelize";

export class LibroRepository {
  crear(data: any) {
    return Libro.create(data);
  }

  listar() {
    return Libro.findAll();
  }

  buscarPorId(id: number) {
    return Libro.findByPk(id);
  }

  actualizar(id: number, data: any) {
    return Libro.update(data, { where: { id_libro: id } });
  }

  eliminar(id: number) {
    return Libro.destroy({ where: { id_libro: id } });
  }

  async disponibles() {
    const librosReservados = await Reserva.findAll({
      where: { estado: "ACTIVA" },
      attributes: ["id_libro"]
    });

    const ids = librosReservados.map(r => r.id_libro);

    return Libro.findAll({
      where: {
        id_libro: { [Op.notIn]: ids }
      }
    });
  }
}
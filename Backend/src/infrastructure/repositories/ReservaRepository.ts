import { Reserva } from "../models/Reserva";
import { Libro } from "../models/Libro";
import { Usuario } from "../models/Usuario";
import { sequelize } from "../database/sequelize";

export class ReservaRepository {
  crear(data: any) {
    return Reserva.create(data);
  }

  listarPorUsuario(id_usuario: number) {
    return Reserva.findAll({
      where: { id_usuario },
      include: [
        {
          model: Libro,
          attributes: ["titulo"]
        },
        {
          model: Usuario,
          attributes: ["nombre"]
        }
      ],
      order: [["id_reserva", "DESC"]]
    });
  }

  buscarPorId(id: number) {
    return Reserva.findByPk(id);
  }

  async cancelar(id: number) {
    await sequelize.query(`
      UPDATE reservas
      SET estado = 'CANCELADA'
      WHERE id_reserva = ${id}
    `);

    return this.buscarPorId(id);
  }

  async devolver(id: number) {
    await sequelize.query(`
      UPDATE reservas
      SET estado = 'DEVUELTA',
          fecha_devolucion = GETDATE()
      WHERE id_reserva = ${id}
    `);

    return this.buscarPorId(id);
  }
}
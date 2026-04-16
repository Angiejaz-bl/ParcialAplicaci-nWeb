import { DataTypes, Model, literal } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Reserva extends Model {
  declare id_reserva: number;
  declare id_usuario: number;
  declare id_libro: number;
  declare fecha_reserva: Date;
  declare fecha_devolucion: Date | null;
  declare estado: string;
}

Reserva.init(
  {
    id_reserva: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_libro: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_reserva: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: literal("GETDATE()")
    },
    fecha_devolucion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "ACTIVA"
    }
  },
  {
    sequelize,
    tableName: "reservas",
    timestamps: false
  }
);
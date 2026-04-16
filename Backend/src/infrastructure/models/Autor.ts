import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Autor extends Model {
  declare id_autor: number;
  declare nombre: string;
  declare apellido: string;
  declare nacionalidad: string | null;
}

Autor.init(
  {
    id_autor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: "autores",
    timestamps: false
  }
);
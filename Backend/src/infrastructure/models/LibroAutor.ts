import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class LibroAutor extends Model {
  declare id_libro: number;
  declare id_autor: number;
}

LibroAutor.init(
  {
    id_libro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_autor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    sequelize,
    tableName: "libro_autores",
    timestamps: false
  }
);
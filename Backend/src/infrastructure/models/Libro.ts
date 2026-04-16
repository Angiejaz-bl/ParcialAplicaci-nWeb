import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Libro extends Model {
  declare id_libro: number;
  declare titulo: string;
  declare isbn: string;
  declare anio_publicacion: number | null;
  declare stock: number;
  declare id_categoria: number;
}

Libro.init(
  {
    id_libro: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    anio_publicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "libros",
    timestamps: false
  }
);
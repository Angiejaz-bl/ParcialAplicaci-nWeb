import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Categoria extends Model {
  declare id_categoria: number;
  declare nombre: string;
  declare descripcion: string | null;
}

Categoria.init(
  {
    id_categoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: "categorias",
    timestamps: false
  }
);
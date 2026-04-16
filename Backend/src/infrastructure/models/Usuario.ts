import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Usuario extends Model {
  declare id_usuario: number;
  declare nombre: string;
  declare correo: string;
  declare password: string;
}

Usuario.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "usuarios",
    timestamps: false
  }
);
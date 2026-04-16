import { Categoria } from "../models/Categoria";
import { Libro } from "../models/Libro";
import { Autor } from "../models/Autor";
import { LibroAutor } from "../models/LibroAutor";
import { Usuario } from "../models/Usuario";
import { Reserva } from "../models/Reserva";

export function setupAssociations() {
  Categoria.hasMany(Libro, { foreignKey: "id_categoria" });
  Libro.belongsTo(Categoria, { foreignKey: "id_categoria" });

  Libro.belongsToMany(Autor, {
    through: LibroAutor,
    foreignKey: "id_libro",
    otherKey: "id_autor"
  });

  Autor.belongsToMany(Libro, {
    through: LibroAutor,
    foreignKey: "id_autor",
    otherKey: "id_libro"
  });

  Usuario.hasMany(Reserva, { foreignKey: "id_usuario" });
  Reserva.belongsTo(Usuario, { foreignKey: "id_usuario" });

  Libro.hasMany(Reserva, { foreignKey: "id_libro" });
  Reserva.belongsTo(Libro, { foreignKey: "id_libro" });
}
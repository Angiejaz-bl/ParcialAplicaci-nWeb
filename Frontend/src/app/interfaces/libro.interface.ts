export interface Libro {
  id_libro: number;
  titulo: string;
  isbn: string;
  anio_publicacion?: number;
  stock: number;
  id_categoria: number;
}
import { Request, Response } from "express";
import { LibroService } from "../../domain/services/LibroService";

export class LibroController {
  private service: LibroService;

  constructor() {
    this.service = new LibroService();
  }

  crear = async (req: Request, res: Response) => {
    try {
      const libro = await this.service.crear(req.body);
      res.status(201).json(libro);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  listar = async (_req: Request, res: Response) => {
    try {
      const libros = await this.service.listar();
      res.json(libros);
    } catch {
      res.status(500).json({ message: "Error al listar libros" });
    }
  };

  buscarPorId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const libro = await this.service.buscarPorId(id);

    if (!libro) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.json(libro);
  };

  actualizar = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const libro = await this.service.actualizar(id, req.body);
    res.json(libro);
  };

  eliminar = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.service.eliminarLibro(id);
    res.json({ message: "Libro eliminado correctamente" });
  };

  disponibles = async (_req: Request, res: Response) => {
    const libros = await this.service.obtenerDisponibles();
    res.json(libros);
  };
}
``
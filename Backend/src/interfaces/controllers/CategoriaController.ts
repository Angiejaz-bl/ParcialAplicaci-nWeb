import { Request, Response } from "express";
import { CategoriaService } from "../../domain/services/CategoriaService";
import { CategoriaRepository } from "../../infrastructure/repositories/CategoriaRepository";

const categoriaRepository = new CategoriaRepository();
const categoriaService = new CategoriaService(categoriaRepository);

export class CategoriaController {
  async crear(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.crear(req.body);
      return res.status(201).json(categoria);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const categorias = await categoriaService.listar();
      return res.status(200).json(categorias);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const categoria = await categoriaService.actualizar(id, req.body);
      return res.status(200).json(categoria);
    } catch (error: any) {
      if (error.message === "Categoría no encontrada") {
        return res.status(404).json({ message: error.message });
      }

      return res.status(400).json({ message: error.message });
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await categoriaService.eliminar(id);
      return res.status(200).json({ message: "Categoría eliminada correctamente" });
    } catch (error: any) {
      if (error.message === "Categoría no encontrada") {
        return res.status(404).json({ message: error.message });
      }

      return res.status(400).json({ message: error.message });
    }
  }
}
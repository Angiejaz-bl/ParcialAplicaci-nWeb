import { Request, Response } from "express";
import { ReservaService } from "../../domain/services/ReservaService";

export class ReservaController {
  private service = new ReservaService();

  crear = async (req: Request, res: Response) => {
    try {
      const reserva = await this.service.crearReserva(req.body);
      return res.status(201).json(reserva);
    } catch (error: any) {
      console.error("ERROR EN CREAR RESERVA:", error);
      return res.status(500).json({
        message: "Error al crear reserva",
        error: error.message
      });
    }
  };

  listar = async (req: Request, res: Response) => {
    try {
      const reservas = await this.service.listarReservasUsuario(Number(req.params.id));
      return res.json(reservas);
    } catch (error: any) {
      return res.status(500).json({
        message: "Error al listar reservas",
        error: error.message
      });
    }
  };

  cancelar = async (req: Request, res: Response) => {
    try {
      const reserva = await this.service.cancelar(Number(req.params.id));
      return res.json(reserva);
    } catch (error: any) {
      console.error("ERROR AL CANCELAR:", error);
      return res.status(500).json({
        message: "Error al cancelar reserva",
        error: error.message
      });
    }
  };

  devolver = async (req: Request, res: Response) => {
    try {
      const reserva = await this.service.devolver(Number(req.params.id));
      return res.json(reserva);
    } catch (error: any) {
      console.error("ERROR AL DEVOLVER:", error);
      return res.status(500).json({
        message: "Error al devolver libro",
        error: error.message
      });
    }
  };
}
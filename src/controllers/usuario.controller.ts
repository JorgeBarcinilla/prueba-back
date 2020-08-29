import { Request, Response } from 'express';
import UsuarioModel, { Usuario } from '../models/usuario.model';

class UsuarioController {
  constructor() {}

  /**
   * CrearUsuario
   */
  public async CrearUsuario(req: Request, res: Response) {
    const { nombres, apellidos, telefono, correo, direccion } = req.body;

    const usuario: Usuario = new UsuarioModel({
      nombres,
      apellidos,
      telefono,
      correo,
      direccion,
    });

    await usuario.save();
    res.json({ message: 'agregado con exito' });
  }

  /**
   * ObtenerUsuarios
   */
  public async ObtenerUsuarios(req: Request, res: Response) {
    const usuarios = await UsuarioModel.find();
    res.json({ usuarios: usuarios });
  }

  /**
   * EliminarUsuario
   */
  public async EliminarUsuario(req: Request, res: Response) {
    await UsuarioModel.remove({
      _id: req.params.id,
    });

    res.json({ message: 'Usuario eliminado' });
  }

  /**
   * EditarUsuario
   */
  public async EditarUsuario(req: Request, res: Response) {
    const _id = req.params.id;
    const usuario = await UsuarioModel.findById({
      _id,
    });
    await usuario?.save();
    res.json({ message: 'Editado correctamente' });
  }
}

export const usuarioController = new UsuarioController();

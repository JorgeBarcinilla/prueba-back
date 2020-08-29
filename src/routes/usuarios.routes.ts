import { Router } from 'express';
import { usuarioController } from '../controllers/usuario.controller';

class UsuarioRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  public config(): void {
    this.router.get('/', usuarioController.ObtenerUsuarios);
    this.router.post('/crear', usuarioController.CrearUsuario);
    this.router.put('/editar', usuarioController.EditarUsuario);
    this.router.delete('/eliminar', usuarioController.EliminarUsuario);
  }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;

import express from 'express';
import UsuarioRoutes from './routes/usuarios.routes';

const app = express();
require('./database');

//configuracion
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/apiUsuario', UsuarioRoutes);

//Aqui se inicializa el servidor
app.listen(app.get('port'), () => {
  console.log(
    'El servidor esta corriendo en http//localhost:' + app.get('port')
  );
});

import mongoose, { Schema, model } from 'mongoose';

export interface Usuario extends mongoose.Document {
  nombres: string;
  apellidos: string;
  telefono: string;
  correo: string;
  direccion: string;
}

const UsuarioSchema = new Schema({
  nombres: String,
  apellidos: String,
  telefono: String,
  correo: String,
  direccion: String,
});

export default model<Usuario>('Usuario', UsuarioSchema);

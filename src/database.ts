const mongoose = require('mongoose');

const { mongoDB } = require('./config');

mongoose
  .connect(mongoDB.URI, { useNewUrlParser: true })
  .then(() => console.log('Base de datos Conectada'))
  .catch((error: any) => console.error(error));

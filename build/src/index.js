"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
//configuracion
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//routes
//Aqui se inicializa el servidor
app.listen(app.get('port'), function () {
    console.log('El servidor esta corriendo en: http//localhost:' + app.get('port'));
});

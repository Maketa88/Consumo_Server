"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)()
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true })); //formulario html enviar
const PORT = process.env.PORT || 10101;
//ruta que recibe un formulario de registro
app.post("/register", function (request, response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(200).json({
        Status: "ok registrado",
        nombres: nombres,
        apellidos: apellidos,
        email: email
    });
});
//ruta que recibe un objeto json para registro
app.post("/registerjson", function (request, response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(200).json({
        Status: "ok registrado con json",
        nombres: nombres,
        apellidos: apellidos,
        ciudad: ciudad,
        email: email
    });
});
//ruta que recibe string query para registro
app.get("/parametros-consulta", function (request, response) {
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    console.log("----", nombres, apellidos);
    return response.status(200).json({
        Status: "ok registrado con params",
        nombres: nombres,
        apellidos: apellidos,
    });
});
//ruta que recibe parametros de ruta para registro
app.get("/parametros-ruta/:id", function (request, response) {
    let id = request.params.id;
    return response.status(200).json({
        Status: "ok params",
        id: id,
    });
});
//ruta que recibe cabecera
app.get("/cabeceras", function (request, response) {
    let cabecera = request.header("Authorization");
    return response.status(200).json({
        Status: "ok cabecera",
        cabecera: cabecera,
    });
});
//numero1
app.post("/cliente/:domicilio", function (request, response) {
    let domicilio = request.params.domicilio;
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    let cedula = request.query.cedula;
    return response.status(200).json({
        Status: "Cliente añadido correctamente",
        domicilio: domicilio,
        nombres: nombres,
        apellidos: apellidos,
        cedula: cedula,
    });
});
/*2.Cree una ruta que reciba los datos del registro de un artículo de la siguiente manera y consúmala con un
 cliente rest:
 Parámetros en la ruta:
 ● id, peso
 Json con propiedades:
 ● ancho, alto*/
app.post("/articulo/:id/:peso", function (request, response) {
    let id = request.params.id;
    let peso = request.params.peso;
    let ancho = request.body.ancho;
    let alto = request.body.alto;
    return response.status(200).json({
        Status: "Articulo añadido correctamente",
        id: id,
        peso: peso,
        ancho: ancho,
        alto: alto,
    });
});
/* Cree una ruta que reciba los datos del borrado de un usuario de la siguiente manera y consúmala con un
 cliente rest::
 Parámetros de consulta(string query):
 ● cc
 Json con propiedades:
 ● motivo
 Cabeceras con:
 
 ● id*/
app.delete("/Borrar", function (request, response) {
    let cedula = request.query.cedula;
    let motivo = request.body.motivo;
    let id = request.header("id");
    return response.status(200).json({
        Status: "Cliente Borrado Satisfatoriamente",
        id: id,
        motivo: motivo,
        cedula: cedula
    });
});
/*Cree una ruta que reciba los datos de la actualización del registro de un usuario de la siguiente manera y
 consúmala con un cliente rest:
 Parámetros de consulta (string query):
 ● cc
 Json con propiedades:
 ● apellidos
 Cabeceras con:
 ● domicilio
 */
app.put("/Actualizar", function (request, response) {
    let cedula = request.query.cedula;
    let apellidos = request.body.apellidos;
    let domicilio = request.header("domicilio");
    return response.status(200).json({
        Status: "Cliente Actualizado Correctamente",
        cedula: cedula,
        apellidos: apellidos,
        domicilio: domicilio
    });
});
/*Cree una ruta que reciba los datos de la actualización del registro de un usuario de la siguiente manera y
 consúmala con un cliente rest::
 Parámetros de consulta(string query):
 ● precio
 Parámetros en la ruta:
 ● cantidad
 ● marca
 Cabeceras con:
 domicilio */
app.get("/ActualizarUsuario/:cantidad/:marca", function (request, response) {
    let precio = request.query.precio;
    let cantidad = request.params.cantidad;
    let marca = request.params.marca;
    let domicilio = request.header("domicilio");
    return response.status(200).json({
        Status: "Cliente Actualizado Correctamente",
        precio: precio,
        cantidad: cantidad,
        marca: marca,
        domicilio: domicilio
    });
});
//sisben
app.post("/Sisben/:cedula", function (request, response) {
    let cedula = request.params.cedula;
    let pais = request.query.pais;
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    return response.status(200).json({
        status: "tu usuario del programa sisben se ha creado satisfatoriamente",
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        pais: pais
    });
});
app
    .listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
})
    .on("error", (error) => {
    throw new Error(error.message);
});

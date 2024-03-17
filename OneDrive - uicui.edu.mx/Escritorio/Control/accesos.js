let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "accesos",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexión exitosa")
    }
});

conexion.end();
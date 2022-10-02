import app from "./app"

//Inicializa el servidor en el puerto especificado
const main = ()=>{
    app.listen(app.get("port"));
    console.log("Server on port:", app.get("port"))
};

main();
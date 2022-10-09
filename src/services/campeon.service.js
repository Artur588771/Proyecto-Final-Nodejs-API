import {getConnection} from "./../common/connection"

//Funcion para consultar todos los campeones
async function readCampeones(response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM campeones")
    return response.json(result)
}

//Funcion para consultar un campeon
async function readCampeon(body,response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM campeones WHERE id = ?", body.id)
    if(result.length !=0)    
    return response.json(result)
    else
    return response.status(400).json({message:"No existe el campeon selecionado."});
}

//Funcion para crear un campeon
async function createCampeon(id, nombre, region, carril, poder,rol,dificultad,imagen,response) {
    if (id === undefined || nombre === undefined || region === undefined || carril === undefined || poder === undefined || rol === undefined || dificultad === undefined || imagen === undefined) {
        return response.status(400).json({message:"Porfavor Rellena todos los campos."});
    }
        const connection = await getConnection();        
        const existeCampeon = await connection.query("SELECT * FROM campeones WHERE id = ?",id)        
        if(existeCampeon.length ==0){
            const result = await connection.query("INSERT INTO `campeones` (`id`, `nombre`, `region`, `carril`, `poder`, `rol`, `dificultad`, `imagen`) VALUES (?,?,?,?,?,?,?,?)", [id,nombre,region,carril,poder,rol,dificultad,imagen])
            return response.json(result) 
        }else{
            return response.status(400).json({message:"Ya hay un campeon con dicho ID."});
        }        
        
}

//Funcion para actualizar un campeon
async function updateCampeon(id, nombre, region, carril, poder,rol,dificultad,imagen,response) {
    if (id === undefined || nombre === undefined || region === undefined || carril === undefined || poder === undefined || rol === undefined || dificultad === undefined || imagen === undefined) {
        return response.status(400).json({message:"Porfavor Rellena todos los campos."});
    }
        const connection = await getConnection();
        const existeCampeon = await connection.query("SELECT * FROM campeones WHERE id = ?",id)        
        if(existeCampeon.length !=0){
            const result = await connection.query("UPDATE campeones SET `nombre`= ?,`region`=?,`carril`=?,`poder`=?,`rol`=?,`dificultad`=?,`imagen`=? WHERE id= ?", [nombre, region, carril, poder,rol,dificultad,imagen,id]);
        return response.json(result)
        }else{
            return response.status(400).json({message:"No existe campeon con dicho ID."});
}           
}

//Funcion para eliminar un campeon
async function deleteCampeon(id,response) {
    const connection = await getConnection();
    const existeCampeon = await connection.query("SELECT * FROM campeones WHERE id = ?",id)        
        if(existeCampeon.length !=0){
            const result = await connection.query("DELETE FROM campeones WHERE id = ?", id)
            return response.json(result)
        }else{
            return response.status(400).json({message:"No existe campeon con dicho ID."});
}        
}

export const methods = {    
    readCampeones,
    readCampeon,
    createCampeon,
    updateCampeon,
    deleteCampeon 
}
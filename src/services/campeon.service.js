import {getConnection} from "./../common/connection"

async function readCampeones(response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM campeones")
    return response.json(result)
}

async function readCampeon(body,response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM campeones WHERE id = ?", body.id)
    if(result.length !=0)    
    return response.json(result)
    else
    return response.status(400).json({message:"No existe el campeon selecionado."});
}

async function createCampeon(id, nombre, region, carril, poder,rol,dificultad,imagen,response) {
    if (id === undefined || nombre === undefined || region === undefined || carril === undefined || poder === undefined || rol === undefined || dificultad === undefined || imagen === undefined) {
        return response.status(400).json({message:"Porfavor Rellena todos los campos."});
    }
        const connection = await getConnection();
        //codigo agregado
        const existeCampeon = await connection.query("SELECT * FROM campeones WHERE id = ?",id)
        console.log(existeCampeon.length)
        if(existeCampeon.length ==0){
            const result = await connection.query("INSERT INTO `campeones` (`id`, `nombre`, `region`, `carril`, `poder`, `rol`, `dificultad`, `imagen`) VALUES (?,?,?,?,?,?,?,?)", [id,nombre,region,carril,poder,rol,dificultad,imagen])
            return response.json(result) 
        }else{
            return response.status(400).json({message:"Ya hay un campeon con dicho ID."});
        }        
        
}

async function updateCampeon(id, nombre, region, carril, poder,rol,dificultad,imagen,response) {
    if (id === undefined || nombre === undefined || region === undefined || carril === undefined || poder === undefined || rol === undefined || dificultad === undefined || imagen === undefined) {
        return response.status(400).json({message:"Porfavor Rellena todos los campos."});
    }
        const connection = await getConnection();
        const result = await connection.query("UPDATE campeones SET `nombre`= ?,`region`=?,`carril`=?,`poder`=?,`rol`=?,`dificultad`=?,`imagen`=? WHERE id= ?", [nombre, region, carril, poder,rol,dificultad,imagen,id]);
        return response.json(result)
}

async function deleteCampeon(body,response) {
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM campeones WHERE id = ?", body.id)
    return response.json(result)
}

export const methods = {    
    readCampeones,
    readCampeon,
    createCampeon,
    updateCampeon,
    deleteCampeon    
}
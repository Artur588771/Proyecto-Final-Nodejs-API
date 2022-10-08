import { methods as campeonServices } from "../services/campeon.service";

const getCampeones = async (req, res)=>{
    try {
        const query = await campeonServices.readCampeones(res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

const getCampeon = async (req, res)=>{
    try {
        const query = await campeonServices.readCampeon(req.params,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

const createCampeon = async (req, res)=>{
    try {
        const { id, nombre, region, carril, poder,rol,dificultad,imagen } = req.body;
        const query = await campeonServices.createCampeon(id, nombre, region, carril, poder,rol,dificultad,imagen,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"Error: No se logro insertar el registro"});
    }
}

const updateCampeon = async (req, res)=>{
    try {
        const {id} = req.params;
        const {nombre, region, carril, poder,rol,dificultad,imagen} = req.body;
        const query = await campeonServices.updateCampeon(id, nombre, region, carril, poder,rol,dificultad,imagen,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"Error: No se actualizo la informacion"});
    }
}

const deleteCampeon = async (req, res)=>{
    try {
        const query = await campeonServices.deleteCampeon(req.params,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"Error: No se elimino el registro"});
    }
}

export const methods ={
    getCampeones,
    getCampeon,
    createCampeon,
    updateCampeon,
    deleteCampeon
}
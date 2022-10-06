import { methods as productServices } from "../services/product.service";

const getProducts = async (req, res)=>{
    try {
        const query = await productServices.readProducts(res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

const getProduct = async (req, res)=>{
    try {
        const query = await productServices.readProduct(req.params,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

const createProduct = async (req, res)=>{
    try {
        const { sku, name_product, price, description_product, url_image } = req.body;
        const query = await productServices.createProduct(sku, name_product, price, description_product, url_image,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
        //res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

const updateProduct = async (req, res)=>{
    try {
        const {sku} = req.params;
        const {name_product, price, description_product, url_image } = req.body;
        const query = await productServices.updateProduct(sku, name_product, price, description_product, url_image,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

const deleteProduct = async (req, res)=>{
    try {
        const query = await productServices.deleteProduct(req.params,res);
        return query
    } catch (error) {
        //res.status(400);
        //res.send(error.message);
        res.status(400).json({message:"El servidor no pudo procesar la informacion"});
    }
}

export const methods ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
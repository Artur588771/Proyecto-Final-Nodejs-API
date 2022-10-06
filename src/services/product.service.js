import {getConnection} from "./../common/connection"

async function readProducts(response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products")
    return response.json(result)
}

async function readProduct(body,response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products WHERE sku = ?", body.sku)
    if(result.length !=0)    
    return response.json(result)
    else
    return response.status(400).json({message:"No existe el producto selecionado."});
}

async function createProduct(sku, name_product, price, description_product, url_image,response) {
    if (sku === undefined || name_product === undefined || price === undefined || description_product === undefined || url_image === undefined ) {
        return response.status(400).json({message:"Bad Request. Please fill all field."});
    }
        const connection = await getConnection();
        //codigo agregado
        const existeProducto = await connection.query("SELECT * FROM products WHERE sku = ?",sku)
        console.log(existeProducto.length)
        if(existeProducto.length ==0){
            const result = await connection.query("INSERT INTO `products` (`sku`, `name_product`, `price`, `description_product`, `url_image`) VALUES (?,?,?,?,?)", [sku,name_product,price,description_product,url_image])
            return response.json(result) 
        }else{
            return response.status(400).json({message:"Ya hay un articulo con dicha llave."});
        }        
        
}

// Listo
async function updateProduct(sku, name_product, price, description_product, url_image,response) {
    if (name_product === undefined || price === undefined || description_product === undefined || url_image === undefined ) {
        return response.status(400).json({message:"Bad Request. Please fill all field."});
    }
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET `name_product`= ?,`price`=?,`description_product`=?,`url_image`=? WHERE sku= ?", [name_product, price, description_product, url_image,sku]);
        return response.json(result)
}

async function deleteProduct(body,response) {
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM products WHERE sku = ?", body.sku)
    return response.json(result)
}

export const methods = {    
    readProducts,
    readProduct,
    createProduct,
    updateProduct,
    deleteProduct    
}
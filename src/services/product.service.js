import {getConnection} from "./../common/connection"

async function readProducts(response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products")
    return response.json(result)
}

export const methods = {    
    readProducts,    
}
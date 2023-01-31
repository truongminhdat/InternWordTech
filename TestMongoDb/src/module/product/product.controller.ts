import { product } from "../../data/product";
import { ProductModel } from "./product.collection";

export const addProduct = async(req,res) => {
    try {
        await ProductModel.remove({})
        let match = await ProductModel.insertMany(product)
        return res.status(200).json(match);
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
    }
}
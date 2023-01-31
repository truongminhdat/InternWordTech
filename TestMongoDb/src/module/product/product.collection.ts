import { ObjectID } from "bson";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const productSchema = new Schema({
    context: {
       name: String,
       image: String,
    }
})
export const ProductModel = mongoose.model('products',productSchema);
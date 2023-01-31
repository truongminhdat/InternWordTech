import { ObjectID } from "bson";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    context: {
        
        product: [
            {
                _id: String,
                version: String
            }
        ]
    }
})
export const OrderModel = mongoose.model('orders',orderSchema);
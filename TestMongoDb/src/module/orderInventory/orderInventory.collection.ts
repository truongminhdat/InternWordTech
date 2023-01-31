
import mongoose from "mongoose";
import { orderInventory } from "../../data/orderInventory";
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    _id: {
        type:Number
    },
    item: {
        type: String,
    },
    price: {
        type: Number, 
    },
    quantity:{
        type: Number
    }

})
export const OrderInventoryModel = mongoose.model('orderInventories',orderSchema);
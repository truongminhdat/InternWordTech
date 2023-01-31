import mongoose  from "mongoose";
const Schema =  mongoose.Schema;
const inventory = new Schema({
    _id : {
        type: Number
    }, 
    item: {
        type: String,
    },
    description: {
        type: String
    },
    instock: {
        type: Number
    }
})
export const InventoryModel = mongoose.model('Inventories',inventory);
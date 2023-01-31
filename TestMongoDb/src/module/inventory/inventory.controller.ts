import { inventory } from "../../data/inventory";
import { InventoryModel } from "./inventory.collection";
export const addAllInventory = async(req,res) => {
    try {
        await InventoryModel.remove({})
        let match = await InventoryModel.insertMany(inventory)
        return res.status(200).json(match);
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
    }
}
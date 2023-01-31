import { InventoryModel } from './../inventory/inventory.collection';

import { orderInventory } from './../../data/orderInventory';


import { OrderInventoryModel } from "./orderInventory.collection";

export const addOrderAllInventory = async(req, res) =>{
    try {
        await OrderInventoryModel.remove({})
        let match = await OrderInventoryModel.insertMany(orderInventory)
        return res.status(200).json(match);                
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
    }
}
export const getorderInventory = async(req, res) =>{
    let match = await InventoryModel.aggregate([
       {
        $lookup:  {
            from: "orderinventories",
            localField: "item",
            foreignField: "item",
            as: "inventory_docs"
          }
       },
        {
        $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$inventory_docs", 0 ] }, "$$ROOT" ] } }
     },
     { $project: { inventory_docs: 0 } }
    ])
    return res.status(200).json({
    match
    })
}
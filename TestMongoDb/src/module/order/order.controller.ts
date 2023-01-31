import { order } from '../../data/order';

import { OrderModel } from "./order.collection";
export const addOrder = async(req,res) => {
    try {
        await OrderModel.remove({})
        let match = await OrderModel.insertMany(order)
        return res.status(200).json(match);
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
    }
}
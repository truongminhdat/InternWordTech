import { customers } from "../data/customer";
import { CustomerModel} from "./customers.collection"

export const getAllCustomers = async(req,res) => {
    try {
        // let match = await CustomerModel.aggregate([{$match:{city:"Salem"}}])
        let match = await CustomerModel.aggregate([
            {
                $match: {
                    city: "Salem"
                },
             
            },{
            $group:{
                _id: "$city",
                count: {$sum: 1
                }
            }
        }, 
       
        ])
        // let match = await CustomerModel.aggregate([{$project:{city:1,address:1,state:1}}])
        // let match = await CustomerModel.aggregate([{$group:{_id:"$state",count:{$sum:1}}}])
        // let match = await CustomerModel.aggregate([{$sort:{postal_code:1,fed_id:-1}}])
        // let match = await CustomerModel.aggregate([{$match:{ city: "Woburn", state: "MA"}},{$project:{address:1 , officer:1 }}])
        // let match = await CustomerModel.aggregate([{$match:{state: "MA"}},{$group:{_id:"$city",count:{$sum:1} }},{$sort:{fed_id:1}},{$limit:5}])
        // let match = await CustomerModel.aggregate([{$match:{state: "MA"}},{$group:{_id:"$city",count:{$sum:1} }},{$sort:{fed_id:1}}])
        // let match = await CustomerModel.find().sort({postal_code:1}).limit(2)

         res.status(200).json(match);
        
    } catch (e) {
        return res.status(500).json({
            msg: "error from the server"
        })        
    }
}

export const addAllCustomer = async(req,res) => {
    try {
        await CustomerModel.remove({})
        let match = await CustomerModel.insertMany(customers)
        return res.status(200).json(match);
        
    } catch (e) {
        return res.status(500).json({
            msg: "error from the server"
        })        
    }
}

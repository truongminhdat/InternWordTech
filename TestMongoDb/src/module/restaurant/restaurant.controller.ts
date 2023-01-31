import { RestaurantsModel } from './restaurant.collection';
import { restaurants } from "../../data/restaurant";
import { match } from 'assert';

export const addRestaurant = async(req,res) => {
    try {
        await RestaurantsModel.remove({})
        let match = await RestaurantsModel.insertMany(restaurants)
        return res.status(200).json(match);
        
    } catch (e) {
        return res.status(500).json({
            msg: "error from the server"
        })        
    }
}

export const excludeRestaurant = async(req, res) => {
    try {
        //câu 1: 
        // let match = await RestaurantsModel.aggregate([ { $unset: "name" } ])
        //Câu 2:
        // let match = await RestaurantsModel.aggregate([ {$project:{restaurant_id:1,name:1,borough:1,zipcode:1,_id:0}} ])
        //Câu 3: 
        // let match = await RestaurantsModel.aggregate([{$project:{restaurant_id:1,name:1,borough:1,zipcode:1,_id:0}},{$match:{
        //     borough : "Bronx"
        // }}])
        //Câu 4: 
        let match = await RestaurantsModel.aggregate()
        // // let match = await RestaurantsModel.find({},{"restaurant_id":1, "name"} )
        return res.status(200).json({
            match
        })
       
        
    } catch (e) {
        return res.status(500).json({
            msg: "error from the server"
        })        
    }
}
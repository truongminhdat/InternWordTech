import mongoose from "mongoose";
const Schema =  mongoose.Schema;
const restaurantSchema = new Schema({
    address:{
        building: String,
        coord: [String],
        street:{
            type: String,
        },
        zipcode: {
            type: String,
        }
    },
    borough: {
        type: String,
    },
    cuisine: {
        type: String
    },
    grades:[
        {
            date: { $date: {
                type: String,
            } },
            grade: {
                type: String
            },
            score: { 
                type: Number
            },
        }
    ], 
    name: {
        type: String,
    },
    restaurant_id: {
        type: String,
    }
    })

export const RestaurantsModel = mongoose.model('Restaurant',restaurantSchema);
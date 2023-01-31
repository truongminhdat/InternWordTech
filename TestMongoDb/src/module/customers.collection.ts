import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    address: {
        type:String,
    },
    city: {
        type:String,
    },   
    cust_type_id:{
        type: String
    },
    fed_id:{
        type: String
    },
    portal_code:{
        type: String
    },
    state:{
        type:String}
        ,
    officer:{
        first_name:{
            type:String}
            ,
        last_name:
        {type:String},
        start_date:{
            type: String
        },
        title:{
            type: String,
        },
        cust_id:{
            type:Number,
        },
    },
    invadividual:{
        birth_date: {
            type: String},
        first_name:{
            type: String},  
        last_name:
        { type:String},
    }
})
export const CustomerModel = mongoose.model('Customer',customerSchema);




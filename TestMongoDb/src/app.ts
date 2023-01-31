import { addOrderAllInventory, getorderInventory } from './module/orderInventory/orderInventory.controller';
import { addRestaurant } from './module/restaurant/restaurant.controller';


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const Customer = require('./module/customers.collection');
import {addAllCustomer, getAllCustomers} from "./module/customers.controller"
import { excludeRestaurant } from './module/restaurant/restaurant.controller';
import { addAllInventory } from './module/inventory/inventory.controller';
import { addOrder } from './module/order/order.controller';
import { addProduct } from './module/product/product.controller';


require("dotenv").config();
const DB = process.env.connect;
mongoose.set('strictQuery', true);
mongoose.connect(DB, {}).then(() => {
  console.log("DB connections success");
});

app.use(bodyParser.json({ limit: "50mb" }));
const port = process.env.SERVER_PORT || 3000;
app.get('/customer/getAll', getAllCustomers);
app.post('/customer/add', addAllCustomer);
app.post('/restaurant/add', addRestaurant)
app.get('/restaurant/getAll',excludeRestaurant )
app.post('/inventory/add', addAllInventory)
app.post('/orderinventory/add', addOrderAllInventory)
app.get('/orderInventory/getInventory',getorderInventory)
app.post('/order/add',addOrder );
app.post('/product/add', addProduct)


app.listen(port, () => console.log(`Server is running time ${port}`));


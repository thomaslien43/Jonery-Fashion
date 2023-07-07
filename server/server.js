import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import axios from "axios";
import Order from "./Models/OrderModel.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payment", orderRouter);
app.get("/api/config/midtrans", (req, res) => {
  res.send(process.env.MIDTRANS_CLIENT_ID);
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));

setInterval(async ()=>{
  //get all order
  const orders = await Order.find({})
      .sort({ _id: -1 })
      .populate("user", "id name email")
  
  //check all order not pay
  orders.filter((order)=> !order.isPaid).map(async (order)=>{
    const result = await axios.get(`https://api.sandbox.midtrans.com/v2/${order.transactionId}/status`,{
      headers:{
        Accept:'application/json',
        Authorization:'Basic U0ItTWlkLXNlcnZlci1SOGdUbjNvejhfeV96eGx0UFVjdDZKbnU6'
      }
    })
    //is transaction status by midtrans is capture its mean paid
    if(result.data.transaction_status === 'capture'){
      const orderTransaction = await Order.findById(order.id);
      orderTransaction.isPaid = true
      orderTransaction.paidAt = Date.now()
      await orderTransaction.save()
    }
  })
  // console.log(orders,'done')
},15000);

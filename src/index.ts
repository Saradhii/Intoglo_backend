import connection from "./server/DataBaseConnection.js"
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import HSCodeRoute from "./routes/HSCode.route.js";
import RequestQuoteRoute from "./routes/RequestQuote.route.js";
import PortsRoute from "./routes/Ports.route.js";
import RequestCallbackRoute from "./routes/RequestCallback.js";


dotenv.config();
const app = express();
app.use(cors({ }));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use("/api",HSCodeRoute);
app.use("/api/requestquote",RequestQuoteRoute);
app.use("/api",PortsRoute);
app.use("/api",RequestCallbackRoute);

app.get("/api",(req,res)=>{
    res.send("Intoglo backend server is running");
});

const port = process.env.PORT;
app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to Database Successfully &");
      } catch (err) {
        console.log(err);
      }
    console.log(`Intoglo backend server is running`);
})


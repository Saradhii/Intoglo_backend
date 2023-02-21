import connection from "./server/db.js"
import express from "express";
import dotenv from "dotenv";
import HSCodeRoute from "./routes/HSCode.route.js";
import cors from "cors";
import RequestQuoteRoute from "./routes/RequestQuote.route.js";


dotenv.config();
const app = express();
app.use(cors({ origin: ["http://localhost:3000","https://www.metacargo.io"] }));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use("/backend",HSCodeRoute);
app.use("/backend/requestquote",RequestQuoteRoute);

app.get("/backend",(req,res)=>{
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


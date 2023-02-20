import connection from "./server/db.js"
import express from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello");
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


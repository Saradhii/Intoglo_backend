import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(process.env.PORT, () => {
    console.log(`Intoglo backend server is running`);
});

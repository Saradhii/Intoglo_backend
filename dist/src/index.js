var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import connection from "./server/db.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello");
});
const port = process.env.PORT;
const url = process.env.DB;
console.log(url);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection;
        console.log("Connected to Database Successfully &");
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Intoglo backend server is running`);
}));

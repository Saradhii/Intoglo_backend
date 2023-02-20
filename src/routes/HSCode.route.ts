import Router from "express";
import Sections_Chapters from "../ElasticQuerys/Sections&Chapters.js";
const HSCodeRoute = Router();

HSCodeRoute.get("/getsections/:index",async(req,res)=>{
   const sections_chapters = await Sections_Chapters(req.params.index);
   res.send(sections_chapters);
});




export default HSCodeRoute;
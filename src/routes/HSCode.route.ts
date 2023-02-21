//Elastic Querys
import Sections_Chapters from "../ElasticQuerys/Sections&Chapters.js";
import IndianHeadings from "../ElasticQuerys/IndianHeadings.js";
import GlobalHeadings from "../ElasticQuerys/GlobalHeadings.js";
import GlobalSubHeadings from "../ElasticQuerys/GlobalSubHeadings.js";
//Types
import {headings_global_type} from "../types/HsCode.Types.js";
//middleware
import Router from "express";
const HSCodeRoute = Router();


//To get all sections & chapters from globalhs
HSCodeRoute.get("/getsections/:index",async(req,res)=>{
  const sections_chapters = await Sections_Chapters(req.params.index);
  res.status(200).send(sections_chapters);
});

//To get all headings of given chapter number in indianhs
HSCodeRoute.get("/getheadingsindia/:index",async(req,res)=>{
  const headings_india = await IndianHeadings(req.params.index,`${req.query.q}`);
  res.status(200).send(headings_india);
});

//To get all sub headings of given heading number in globalhs 
HSCodeRoute.get("/getsubheadings/:index", async (req, res) => {
  const sub_headings_global = await GlobalSubHeadings(req.params.index,`${req.query.q}`);
  res.status(200).send(sub_headings_global);
});

//To get all headings of given chapter number in globalhs
HSCodeRoute.get("/getheadings/:index",async(req,res)=>{
    const headings_global : any = await GlobalHeadings(req.params.index,`${req.query.q}`);
    let new_data : Array<headings_global_type>= headings_global?.hits?.hits;
    let newArray : Array<headings_global_type> = [];
    let uniqueObject: {[key: string]: any} = {};
    let i:string;
    for ( i in new_data) 
    {let objTitle :string = new_data[i]._source.heading_no;
     uniqueObject[objTitle] = new_data[i];}
    for (i in uniqueObject) 
    {newArray.push(uniqueObject[i]);}
    res.status(200).send(newArray);
})






export default HSCodeRoute;
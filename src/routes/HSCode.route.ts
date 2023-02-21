import Router from "express";
//Elastic Querys
import Sections_Chapters from "../ElasticQuerys/Sections&Chapters.js";
import IndianHeadings from "../ElasticQuerys/IndianHeadings.js";
import GlobalHeadings from "../ElasticQuerys/GlobalHeadings.js";
import GlobalSubHeadings from "../ElasticQuerys/GlobalSubHeadings.js";
import SubHeadingsByCountry from "../ElasticQuerys/SubHeadingsByCountry.js";
import SearchEngine from "../ElasticQuerys/SearchEngine.js";
import SearchCount from "../ElasticQuerys/SearchCount.js";
//Types
import {headings_global_type} from "../types/HsCode.Types.js";

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

//To get subheadings/hscode for specific country on given heading number
HSCodeRoute.get("/gethscode/:index",async(req,res)=>{
  const hscode = await SubHeadingsByCountry(req.params.index,`${req.query.q}`);
  res.status(200).send(hscode);
});

//To get total count of searching table results
HSCodeRoute.get("/searchglobalres/:index", async(req,res)=>{
  const count = await SearchCount(req.params.index, `${req.query.q}`);
  res.status(200).send(count);
});

//To search HsCode/word for auto suggestions 
HSCodeRoute.get("/searchhs/:index", async (req, res) => {
// Remove Special characters and unwanted spaces in given string
  let str :string = `${req.query.q}`;
  str = str.trim();
  str = str.replace(/\s+/g, " ");
  str = str.replace(/[^a-zA-Z0-9 ]/g, "");
  const resuls = await SearchEngine(req.params.index, str);
  res.status(200).send(resuls);
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
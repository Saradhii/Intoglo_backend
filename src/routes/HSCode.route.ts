import Sections_Chapters from "../ElasticQuerys/Sections&Chapters.js";
import IndianHeadings from "../ElasticQuerys/IndianHeadings.js";
import GlobalHeadings from "../ElasticQuerys/GlobalHeadings.js";
import GlobalSubHeadings from "../ElasticQuerys/GlobalSubHeadings.js";
import Router from "express";
const HSCodeRoute = Router();

HSCodeRoute.get("/getsections/:index",async(req,res)=>{
        const sections_chapters = await Sections_Chapters(req.params.index);
        res.status(200).send(sections_chapters);
});

HSCodeRoute.get("/getheadingsindia/:index",async(req,res)=>{
    const headings_india = await IndianHeadings(req.params.index,`${req.query.q}`);
    res.status(200).send(headings_india);
});

HSCodeRoute.get("/getsubheadings/:index", async (req, res) => {
  const sub_headings_global = await GlobalSubHeadings(req.params.index,`${req.query.q}`);
  res.status(200).send(sub_headings_global);
});



HSCodeRoute.get("/getheadings/:index",async(req,res)=>{
    type headings_global_type = {
      "_index":string,
      "_id":string,
      "_score":number,
      "_source":{
      "section_level": string,
      "section_no": string,
      "section": string,
      "chapter_no": string,
      "chapter": string,
      "heading_no": string,
      "heading": string,
      "hscode": string,
      "description": string
      },
    }
    const headings_global : any = await GlobalHeadings(req.params.index,`${req.query.q}`);
    let new_data : Array<headings_global_type>= headings_global?.hits?.hits;
    let newArray : Array<headings_global_type> = [];
    let uniqueObject: {[key: string]: any} = {};
    let i:string;
    for ( i in new_data) 
    {
     let objTitle :string = new_data[i]._source.heading_no;
     uniqueObject[objTitle] = new_data[i];
     }
    for (i in uniqueObject) 
    {
    newArray.push(uniqueObject[i]);
    }
    res.status(200).send(newArray);
})






export default HSCodeRoute;
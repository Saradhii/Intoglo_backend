import Sections_Chapters from "../ElasticQuerys/Sections&Chapters.js";
import IndianHeadings from "../ElasticQuerys/IndianHeadings.js";
import GlobalHeadings from "../ElasticQuerys/GlobalHeadings.js";
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

HSCodeRoute.get("/getheadings/:index",async(req,res)=>{
    // const headings_global = await GlobalHeadings(req.params.index,`${req.query.q}`);
    // let new_data = headings_global?.hits?.hits;
    // let newArray = [];
    // let uniqueObject = {};
    // for (let i in new_data) 
    // {
    //  objTitle = new_data[i]._source.heading_no;
    //  uniqueObject[objTitle] = new_data[i];
    //  }
    // for (i in uniqueObject) 
    // {
    // newArray.push(uniqueObject[i]);
    // }
    // res.status(200).send(newArray);
  const data : object = await GlobalHeadings(req.params.index,`${req.query.q}`);
  let new_data: Array<any> = data?.hits?.hits;
  let newArray = [];
  let uniqueObject : object = {};
  let i :string;
  for (i in new_data) 
  {
    let  objTitle = new_data[i]._source.heading_no;
     uniqueObject[objTitle] = new_data[i];
  }
  for (i in uniqueObject) 
  {
    newArray.push(uniqueObject[i]);
  }
  res.json(newArray);
})




export default HSCodeRoute;
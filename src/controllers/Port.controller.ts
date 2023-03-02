import { Request, Response } from "express";
import { portModel } from "../models/Port.model.js";
import { CountryModel } from "../models/Country.model.js";
import sortBy from "lodash.sortby";
import {PortType} from "../models/Port.model.js"

const getCountries = async function (req: Request, res: Response) {
  try {
    let countries:any = await CountryModel.find().lean();
    if (countries.length > 0) {
      countries = sortBy(countries, [function (o) {return o.countryCode}]);
      return res.status(200).send(countries);

    } else {
    return  res.status(404).send({ status: false, msg: "country list not found" });
    }
  } catch (err: any) {
   return res.status(500).send({ status: false, message: err.message });
  }
};

const getPorts = async function (req: Request, res: Response) {
  try {
    let country:String = req.params.countryName;
 
    let ports:PortType[] = await portModel.find({ CountryNameUUID: country }).select({
      mainPortName: 1,
      portNameUUID: 1,
      _id: 0,
    });
    if (ports.length>0) {
      ports = sortBy(ports, [function (o:PortType) {return o.mainPortName}]); 
      return res.status(200).send(ports);   
    }
    else{
      return  res.status(404).send({ status: false, msg: "port  not found" });
    }
  } catch (err: any) {
    console.log(err);
  return  res.status(500).send({ status: false, message: err.message });
  }
};


const getPortsDetails = async function (req: Request, res: Response) {
  try {
    let port = req.params.portName;
   
    let data:any = await portModel.find({ portNameUUID: port });
    
    if(data.length>0){
      // adding flag URl to response of portModel
      let countryFlag:any = await CountryModel.find({countryCode:data[0].countryCode})
      if(countryFlag.length===0)return  res.status(404).send({ status: false, msg: "port details is not found" });

       data[0]=data[0].toObject()
       data[0].flag = countryFlag[0].toObject().flag.toString();      
      return res.status(200).send(data);  
    }else {
        res.status(404).send({ status: false, msg: "port details is not found" });
      }
  } catch (err: any) {
    console.log(err);
    
    res.status(500).send({ status: false, message: err.message });
  }
};

export { getCountries, getPorts, getPortsDetails};

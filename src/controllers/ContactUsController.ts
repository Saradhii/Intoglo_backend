import { Request, Response } from "express";
import {citiesListModel} from "../models/CitiesListModel.js"
import {countriesListModel} from "../models/CountriesListModel.js"
import {statesListModel} from "../models/StatesListModel.js"

export const submitForm= async function (req: Request, res: Response) {

    try {
        
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
export const getCountries= async function (req: Request, res: Response) {

    try {

        let countryList=await countriesListModel.find()
        return res.status(200).send({status:true,countryList})
     
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
export const getStates= async function (req: Request, res: Response) {
        const countryName:string=req.params.countryName
    try {
       let statesList=await statesListModel.find({country_name:countryName}) 
       return res.status(200).send({status:true,statesList})
       
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
export const getCities= async function (req: Request, res: Response) {
    const stateName:string=req.params.stateName
    try {
        let statesList=await citiesListModel.find({state_name:stateName})
        return res.status(200).send({status:true,statesList})
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
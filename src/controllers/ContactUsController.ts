import { Request, Response } from "express";
import { resourceUsage } from "process";

export const submitForm= async function (req: Request, res: Response) {

    try {
        
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
export const getCountries= async function (req: Request, res: Response) {

    try {
        return res.send("done")
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
export const getStates= async function (req: Request, res: Response) {

    try {
        return res.send("done")
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
export const getCities= async function (req: Request, res: Response) {

    try {
        return res.send("done")
    } catch (error:any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}
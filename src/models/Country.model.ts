import { Schema, model } from "mongoose";

export interface Countries  {
    countryCode:string;
    flag:string;
    CountryNameUUID?:string;
}

const CountrySchema = new Schema<Countries>({
    countryCode:String,
    flag:String,
    CountryNameUUID:String
})
// const CountrySchema = new Schema();
export const CountryModel = model("countries",CountrySchema);

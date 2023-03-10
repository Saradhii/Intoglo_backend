import { Schema, model } from "mongoose";

export interface CitiesType  {
    id:number
    name:string;
    state_id:number
    state_code:string;
    state_name:string;
    country_id:number;
    country_code:string;
    country_name:string;
   latitude:string;
   longitude:string;
   wikiDataId:string;
}

const citiesListSchema = new Schema<CitiesType>({
    id:Number,
    name:String,
    state_id:Number,
    state_code:String,
    state_name:String,
    country_id:Number,
    country_code:String,
    country_name:String,
    latitude:String,
    longitude:String,
    wikiDataId:String,
})

export  const citiesListModel = model<CitiesType>("citiesLists", citiesListSchema);

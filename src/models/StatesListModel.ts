import { Schema, model } from "mongoose";

export interface StatesType  {
    id:number;
    name:string;
    country_id:number;
    country_code:string;
    country_name:string;
    state_code:number;
   latitude:string;
   longitude:string;
 
}

const statesListSchema = new Schema<StatesType>({
    id:Number,
    name:String,
    country_id:Number,
    country_code:String,
    country_name:String,
    state_code:Number,
    latitude:String,
    longitude:String,
   
})

export const statesListModel = model<StatesType>("citiesList", statesListSchema);

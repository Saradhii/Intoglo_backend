import { Schema, model } from "mongoose";

export interface CountriesType  {
    id:number;
    name:string;
    iso3:string;
    iso2:string;
    numeric_code:string;
    phone_code:string;
   capital:string;
   currency:string;
   currency_name:string;
   currency_symbol:string;
   tld:string;
   native:string;
   region:string;
   subregion:string;
   latitude:string;
   longitude:string;
   emoji:string;
   emojiU:string;
}

const countriesListSchema = new Schema<CountriesType>({
    id:Number,
    name:String,
    iso3:String,
    iso2:String,
    numeric_code:String,
    phone_code:String,
    capital:String,
    currency:String,
    currency_name:String,
    currency_symbol:String,
    tld:String,
    native:String,
    region:String,
    subregion:String,
    latitude:String,
    longitude:String,
    emoji:String,
    emojiU:String,
})

export const countriesListModel = model<CountriesType>("countriesList", countriesListSchema);

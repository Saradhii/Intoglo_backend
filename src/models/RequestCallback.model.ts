import { Schema, model } from "mongoose";

 export interface CallbackFormType  {
  
    userDetails:{
        firstName:String,
        lastName:String,
        companyName:String,
        jobTitle:String,
        email:String,
        phone:String,
        country:String,
        state:String,
        city:String,
        annualInternationalFreightShipments:String,
        message:String
    }
  updatedAt: string;
};
 

const CallbackFormSchema = new Schema<CallbackFormType>({
  
    userDetails:{
        firstName:String,
        lastName:String,
        companyName:String,
        jobTitle:String,
        email:String,
        phone:String,
        country:String,
        state:String,
        city:String,
        annualInternationalFreightShipments:String,
        message:String,
    },
  updatedAt: String,
});
export const requestCallbackModel = model<CallbackFormType>("requestcallback", CallbackFormSchema);



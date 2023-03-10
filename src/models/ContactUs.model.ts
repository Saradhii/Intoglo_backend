import { Schema, model } from "mongoose";

 export interface UserType  {
  
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
 

const userSchema = new Schema<UserType>({
  
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
export const userModel = model<UserType>("user", userSchema);



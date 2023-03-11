import { Schema, model } from "mongoose";

 export interface CallbackFormType  {
  
        firstName:String,
        lastName:String,
        companyName:String,
        jobTitle:String,
        email:String,
        phone:{},
        country:String,
        state:String,
        city:String,
        annualInternationalFreightShipments:String,
        message:String
};
 

const CallbackFormSchema = new Schema<CallbackFormType>({
        firstName:String,
        lastName:String,
        companyName:String,
        jobTitle:String,
        email:String,
        phone: {
          countryDialCode: { type: String },
          phoneNumber:{type:Number},
        },
        country:String,
        state:String,
        city:String,
        annualInternationalFreightShipments:{
          type:String,
          enum:[
            "I'm a logistics provider" ,
            '500+',
            '100-499',
            '25-99',
            'Less than 25',
            "None - I'm a first time shipper",
            "None - I don't ship freight"
          ]
        },
        message:String,
},{ timestamps: true });
export const requestCallbackModel = model<CallbackFormType>("requestcallback", CallbackFormSchema);



import Router from "express";
const ContactUsRoute = Router();
import {submitForm,getCountries,getStates,getCities} from "../controllers/ContactUsController.js"

ContactUsRoute.post("/contact-us/submit-form",submitForm)
ContactUsRoute.get("/contact-us/countries",getCountries)
ContactUsRoute.get("/contact-us/:countryName/states",getStates)
ContactUsRoute.get("/contact-us/:stateName/cities",getCities)

export default ContactUsRoute;
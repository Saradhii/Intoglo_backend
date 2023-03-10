import Router from "express";
const ContactUsRoute = Router();
import {submitForm,getCountries,getStates,getCities} from "../controllers/ContactUsController.js"

ContactUsRoute.post("/contact-us/submit-form",submitForm)
ContactUsRoute.get("/contact-us/countries",getCountries)
ContactUsRoute.get("/contact-us/states",getStates)
ContactUsRoute.get("/contact-us/cities",getCities)

export default ContactUsRoute;
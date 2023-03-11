import Router from "express";
const RequestCallbackRoute = Router();
import {submitForm,getCountries,getStates,getCities,getQuotes} from "../controllers/ContactUsController.js"

RequestCallbackRoute.post("/request-callback/submit-form",submitForm)
RequestCallbackRoute.get("/request-callback/countries",getCountries)
RequestCallbackRoute.get("/request-callback/:countryName/states",getStates)
RequestCallbackRoute.get("/request-callback/:stateName/cities",getCities)
RequestCallbackRoute.get("/request-callback/quotes",getQuotes)

export default RequestCallbackRoute;
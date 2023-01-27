import axios, { AxiosResponse } from "axios"
import { geolocationInterface } from "@/interfaces/geolocationInterface";

const apiKey = "at_GlbGDQM9kePfuVejYu6EQZXueFBIB"



const instance = axios.create({
    baseURL: `https://geo.ipify.org/api/v2`,
    headers: {"Content-Type": "application/json;charset=UTF-8",}
  });


  export class geoRepository {
    getGeoLocation = (userinput: string): Promise <AxiosResponse<geolocationInterface>> =>{
        console.log(userinput)
       return instance.get(`/country,city?apiKey=${apiKey}&ipAddress=${userinput}`)
    }
  } 


  export default new geoRepository()
  



  
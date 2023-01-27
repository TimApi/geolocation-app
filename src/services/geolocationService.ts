import  geoRepository from "@/repositories/geolocationRepository";


export class geoService {
    getGeoLocation(userinput: string) {
        console.log(userinput)
        return geoRepository.getGeoLocation(userinput)
    }
}


export default new geoService()
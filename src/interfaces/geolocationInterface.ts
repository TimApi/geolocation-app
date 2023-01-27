export interface geolocationInterface{
    ip: string
    location: {
        city: string;
        geonameId: number;
        lat: number;
        lng: number;
        postalCode: string;
        country: string;
        region: string;
        timezone: string;
    }
    domeins: string[]
    as: {
        asn: number;
        name: string;
        route: string;
        domein: string;
        type: string;
    }
    isp: string;
}
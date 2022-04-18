export interface ICategories{
  id: string;
  name: string;
  subCategories:ISubCategories[];
}
export interface ISubCategories{
  id: string;
  name: string;
}
export interface IIp{
  ip:string
}
export interface ILocation{
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: string;
  lon: string;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

export interface LocationResponse {
  city: string;
  continent: string;
  continentCode: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  locality: string;
  localityInfo: { administrative: []; informative: [] };
  localityLanguageRequested: string;
  longitude: number;
  lookupSource: string;
  plusCode: string;
  postcode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {

 
  public url : string ="https://api.weatherbit.io/v2.0/forecast/daily";
  public key : string ="7aa3fedb08654e3bb30496fe99dc3dc4";
  public days : number = 5;
  
  constructor( public http:HttpClient) { }

  public getWeathetForecastInfo(cityName:string){
  return this.http.get(this.url  + "?city=" + cityName + "&key=" + this.key + "&days=" +this.days);

  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from './weather-info.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Weather-Forecast-Mini-App';
  public cityList =['Calgary','Edmonton','Fort McMurray','Grande Prairie','Toronto'];
  public dropdownSelect: any="";
  public featchedData: any;
  public iconUrl:string="../../assets/icon/";

constructor(public service:WeatherInfoService){}
  ngOnInit(): void {  
   if(this.cityList){    
    this.dropdownSelect=this.cityList[0];
    this.service.getWeathetForecastInfo(this.dropdownSelect).subscribe(res=>{
    this.forecastInformation(res);
    });
   }
  }

 
public weathetResponseInfo(){  
if(this.dropdownSelect){ 
  this.service.getWeathetForecastInfo(this.dropdownSelect).subscribe(res=>{    
    this.forecastInformation(res);
  });
}
}

public forecastInformation(res:any){  
this.featchedData = res.data;
}

public getIconUrl(res:any){
let imageIcon= "";
if (this.iconUrl ){ 
  imageIcon = this.iconUrl + res.weather.icon + '.png';
}
return imageIcon;
}

}

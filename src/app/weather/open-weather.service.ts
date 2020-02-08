import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private api_key = "a8d519fc72c907423dfe4fc3dea73465";

  constructor(private http: HttpClient) { }

  GetData(city: string) {
    return this.http.get<IWeatherInfo>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`);
  }
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeatherInfo {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  id: number;
  name: string;
  cod: number;
}
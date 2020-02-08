import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SvenWeatherService {

  constructor(private http: HttpClient) { }

  GetData() {
    return this.http.get<IWeather>("https://my-json-server.typicode.com/svenmrn/JSONServer/forecast");
  }
}

export interface IWeather {
  city: string;
  temp: number;
}
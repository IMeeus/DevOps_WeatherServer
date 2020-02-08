import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from './open-weather.service'; 
import { PhotoService } from '../photo.service';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  requestedCity: string = "antwerp";
  currentPhoto: string = "";


  citiesInfo: ICityInfo[] = [];

  constructor(private openWeatherSvc : OpenWeatherService, private photoSvc: PhotoService) { }

  ngOnInit() {
    this.UpdateWeatherData(this.requestedCity);
  }

  get RequestedCity() {
    return this.requestedCity;
  }

  set RequestedCity(value: string) {
    this.requestedCity = value;
    this.UpdateWeatherData(this.requestedCity);
  }

  UpdateWeatherData(city: string) {
    this.openWeatherSvc.GetData(this.requestedCity).subscribe((weatherResult) => {
      this.citiesInfo[0] = {
        name: weatherResult.name,
        temp: weatherResult.main.temp,
        info: weatherResult.weather[0].description
      }

      this.photoSvc.GetPhotos(weatherResult.name).subscribe((photoResult) => {
        if (photoResult.total_results >= 1) {
          this.currentPhoto = photoResult.photos[0].src.medium;
        }
      }, () => {
        this.currentPhoto = "";
      });

    }, () => {
      this.citiesInfo[0] = {
        name: 'not found',
        temp: 0,
        info: 'not found'
      }
      this.currentPhoto = "";
    });
  }
}

interface ICityInfo {
  name: string;
  temp: number;
  info: string;
}

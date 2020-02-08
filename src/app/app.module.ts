import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

import { SvenWeatherService } from './weather/sven-weather.service';
import { OpenWeatherService } from './weather/open-weather.service';
import { PhotoService } from './photo.service';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    TableModule
  ],
  providers: [
    SvenWeatherService,
    OpenWeatherService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

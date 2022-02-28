import { Component } from '@angular/core';
import { ICurrentWeather } from './icurrent-weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';
  currentWeather: ICurrentWeather = {
    city: '',
      country: '',
      date: new Date(),
      image: '',
      temperature: 0,
      description: '' 
    
  }

  constructor(private WeatherService: WeatherService){}
  doSearch(SearchValue: string) {
    const userInput = SearchValue.split(',').map(s => s.trim());
    this.WeatherService.getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined ).subscribe(data => this.currentWeather = data)
  }


}

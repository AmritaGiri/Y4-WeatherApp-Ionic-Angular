import { Component } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp: any;
  todayDate = new Date();
  // eslint-disable-next-line @typescript-eslint/quotes
  cityName = "";
  weatherIcon: any;
  weatherDetails: any;
  // eslint-disable-next-line @typescript-eslint/quotes
  name="";
  loading = true;
  constructor(public httpClient: HttpClient) {
  //this.loadData();
   }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe( results => {
      console.log(results);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.weatherTemp = results['main'];
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.name = results['name'];
      //main from the json of console
      //single or double qoute trouble
      console.log(this.weatherTemp);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.weatherDetails = results['weather'][0];
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.weatherIcon = results['weather'][0];
      console.log(this.weatherDetails);
      this.weatherIcon = `../../assets/weather.png`;
      this.loading = false;
    });
  }
}

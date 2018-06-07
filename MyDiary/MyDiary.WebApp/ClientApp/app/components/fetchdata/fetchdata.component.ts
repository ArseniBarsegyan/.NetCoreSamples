import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    public notes: Note[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));

        http.get(baseUrl + 'api/Notes/').subscribe(result => {
            this.notes = result.json() as Note[];
        }, error => console.error(error));
    }
}

interface Note {
    description: string;
    date: Date;
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

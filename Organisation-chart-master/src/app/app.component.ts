import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: any[];
  constructor() { }
  ngOnInit() {
    //d3 csv invokation can be replaced with API calls using d3 request.
    d3.csv(
      '../assets/SampleDate.csv'
    ).then(data => {
      this.data = data;
      let prevIndex = 0;
    });
  }
}

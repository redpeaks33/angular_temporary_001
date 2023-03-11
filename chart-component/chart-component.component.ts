import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { config } from './config';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent {
  single: any[] = [];
  multi: any[] = [];

  config = config;
  aaaaaaaaaaS = "aaaa"

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }
  onActivate(event: any) {
    console.log(event);
  }
  onDeactivate(event: any) {
    console.log(event);
  }
}

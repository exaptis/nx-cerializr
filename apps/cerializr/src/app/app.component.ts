import { Component } from '@angular/core';
import {DeserializeArray} from 'cerializr';
import { AppModel } from './app.model';

@Component({
  selector: 'nx-cerializr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cerializr';
  apps: {[name: string]: string}[] =  [
    {name: 'spider-man'},
    {name: 'witcher3'},
    {name: 'gof of war'}
  ];
  appList: AppModel[] = DeserializeArray(this.apps, AppModel)
}

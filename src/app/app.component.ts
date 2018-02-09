///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component } from '@angular/core';
/*整个应用的基础（地基）*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

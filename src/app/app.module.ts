import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HighlightDirective} from './shared/highlight.directive';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

// @NgModule装饰器用来为模块定义元数据。
@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

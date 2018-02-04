import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';
import {AwesomePipe} from './awesome.pipe';

// 建立共享模块
@NgModule({
  imports: [CommonModule],
  declarations: [
    AwesomePipe,
    HighlightDirective
  ],
  exports: [
    AwesomePipe,
    HighlightDirective,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}

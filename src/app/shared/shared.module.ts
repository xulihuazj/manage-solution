import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';
import {AwesomePipe} from './awesome.pipe';
import {MdToolbarModule, MdIcoModule, MdButtonModule, MdCardModule, MdInputModule, MdListModule} from '@angular/material';

// 建立共享模块
// 导入导出 CommonModule，这样其他模块 只需要导入 SharedModule
// 其他共享组件都可以放在 SharedModule中
@NgModule({
  imports: [
    CommonModule,
    // 导入angular meterial 模块
    MdToolbarModule,
    MdIcoModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  declarations: [
    AwesomePipe,
    HighlightDirective
  ],
  exports: [
    AwesomePipe,
    HighlightDirective,
    CommonModule,
    FormsModule,
    MdToolbarModule,
    MdIcoModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ]
})
export class SharedModule {
}

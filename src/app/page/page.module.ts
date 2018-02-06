import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page.component';
import {RouterModule, Routes} from '@angular/router';

const router: Routes = [
  {
    path: '**',
    component: PageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(router),
    CommonModule,
  ],
  declarations: [
    PageComponent
  ]
})
export class PageModule {
}

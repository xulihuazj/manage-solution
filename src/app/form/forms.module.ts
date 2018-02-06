import {RouterModule, Routes} from '@angular/router';
import {ValidationComponent} from './validation/validation.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'validation', component: ValidationComponent},
  /*{ path: 'standard', component: StandardComponent },
  { path: 'extended', component: ExtendedComponent },

  { path: 'upload', component: UploadComponent },
  { path: 'cropper', component: CropperComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    /* SharedModule,
     SelectModule,
     ColorPickerModule,
     TextMaskModule,
     TagInputModule,
     CustomFormsModule,
     FileUploadModule,
     ImageCropperModule*/
  ],
  providers: [
    //  ColorPickerService
  ],
  declarations: [
    ValidationComponent,
    /* StandardComponent,
     ExtendedComponent,
     UploadComponent,
     CropperComponent*/
  ],
  exports: [
    RouterModule
  ]
})
export class FormsModule {
}

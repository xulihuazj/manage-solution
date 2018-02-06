import {Component, OnInit} from '@angular/core';
import {SelectivePreloadingStrategy} from '../strategy/selective.preloading.strategy';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SettingsService} from '../core/setting/settings.service';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modules: string[];

  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder) {

    this.valForm = fb.group({
      'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'password': [null, Validators.required]
    });

  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (const c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(value);
    }
  }

  ngOnInit() {
  }

}

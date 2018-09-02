import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FfTestPageRoutingModule } from './ff-test-page-routing.module';
import {FfTestPageComponent} from '@app/ff-test-page/ff-test-page.component';
import {SharedModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FfTestPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    FfTestPageComponent
  ]
})
export class FfTestPageModule { }

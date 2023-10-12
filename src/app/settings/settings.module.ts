import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { ToastrModule } from 'ngx-toastr';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ResetPasswordComponent,
    VerifyCodeComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ]
})
export class SettingsModule { }

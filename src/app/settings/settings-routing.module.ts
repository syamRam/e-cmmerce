import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';

const routes: Routes = [

  { path: "", redirectTo: "change", pathMatch: "full" },
  { path: "change", component: ChangePasswordComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'verify', component: VerifyCodeComponent },
  { path: 'reset', component: ResetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

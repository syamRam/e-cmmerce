import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private _authService: AuthService, private _router: Router, private _toastrService: ToastrService) {

  }

  finalForgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
  })

  handleFinalForgetPassword(finalForgetPasswordForm: FormGroup) {
    this._authService.finalForgetPasswrod(finalForgetPasswordForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(["/login"])
        this._toastrService.success("Password Changed")

      },

      error: (err) => {
        console.log(err);

      }
    })

  }

}

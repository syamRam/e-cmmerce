import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {


  constructor(private _AuthService: AuthService, private _router: Router, private _ToastrService: ToastrService) {

  }

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required])
  })

  handleForgetPassword(forgetPasswordForm: FormGroup) {
    this._AuthService.forgetPassword(forgetPasswordForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message)
        this._router.navigate(['setting/verify'])

      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message)




      }
    })
  }
}

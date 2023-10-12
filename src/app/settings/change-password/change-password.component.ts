import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router
      ,private _ToastrModule:ToastrService
    
    ) { }

  headers: any = {
    token: localStorage.getItem('userToken')
  }

  isLoading: boolean = false;

  changePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
  })

  handleChangePassword(changePasswordForm: FormGroup) {
    this.isLoading = true;

    this._AuthService.changrPassword(changePasswordForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this._Router.navigate(["/home"]);
        this.isLoading = false;
        this._ToastrModule.success(res.message);

      },
      error: (err) => {
        console.log(err);
        this._ToastrModule.error(err.error.message);

        this.isLoading = false;

      }
    })

  }


}

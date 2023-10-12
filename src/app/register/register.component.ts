import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  isLoading: boolean = false;
  apiError:string  = "";
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),


  })

  constructor(private _authService: AuthService, private _router: Router) {

  }

  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    this._authService.register(registerForm.value).subscribe({
      next: (res) => {
        if (res.message == "success") {
          this.isLoading = false;
          this._router.navigate(['/login'])
        }
      },
      error: (err) => {
        this.isLoading = false;

        console.log(err);
        this.apiError = err.error.message

      }
    })
  }

}
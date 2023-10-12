import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false

  constructor(private _authService: AuthService, private _router: Router) {

    if (localStorage.getItem('userToken') !== null) {
      _router.navigate(["/home"])
    }

  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("test@test.test", [Validators.required, Validators.email]),
    password: new FormControl("Test1234", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
  })

  handleLogin(loginForm: FormGroup) {
    this.isLoading = true
    this._authService.login(loginForm.value).subscribe({
      next: (res) => {

        if (res.message == 'success') {
          localStorage.setItem('userToken', res.token)
          this._authService.decodeUserData();
          this._router.navigate(["/home"])
          console.log(res);
          this.isLoading = false;
        }


      },
      error: (err) => {
        console.log(err.error);
        this.isLoading = false;

      }
    })

  }

  






}

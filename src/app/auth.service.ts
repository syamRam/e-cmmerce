import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient, private _router: Router) {

    if (localStorage.getItem('userToken') != null) {
      this.decodeUserData()
    }
  }


  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(["/login"]);


  }

  changrPassword(userData: object): Observable<any> {
    return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', userData);


  }

  forgetPassword(userEmail: object): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', userEmail);


  }

  finalForgetPasswrod(userData: object): Observable<any> {

    return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', userData);


  }

  resterPasswrd(userData: object): Observable<any> {
    return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', userData)

  }

  verifyResetCode(userData: object): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', userData)

  }
  decodeUserData() {
    let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken: any = jwtDecode(encodeToken);
    console.log(decodeToken);
    this.userData.next(decodeToken);

  }

  register(userData: object): Observable<any> {

    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }

  login(userData: object): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData)
  }
}

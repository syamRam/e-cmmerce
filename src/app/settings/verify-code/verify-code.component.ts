import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {

  constructor(private _authService: AuthService, private _router: Router, private _ToastrService: ToastrService) {

  }


  VRCode: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required])
  })

  handleVResetCode(VRCode: FormGroup) {
    this._authService.verifyResetCode(VRCode.value).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigate(['/setting/reset'])
        this._ToastrService.success(res.status)
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message)

      }
    })

  }

}

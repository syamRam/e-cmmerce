import { Component } from '@angular/core';
import {FormGroup ,Validators, FormControl} from "@angular/forms";
import {CartService} from "../cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  cartId:string = ''

  shippinAdd:FormGroup = new FormGroup({
    details:new FormControl(null ),
    phone:new FormControl(null),
    city:new FormControl(null)

  })

  constructor(private  _cartService:CartService , private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe((res:any)=>{
      this.cartId = res.params.cartId
      console.log(
        this.cartId
      )

    })

  }


  handleOnlinePay(){

    this._cartService.onlinePayment(this.cartId,this.shippinAdd.value).subscribe({
      next:(res)=>{
        console.log(res)
        if (res.status == "success"){
          console.log(res.session.url);
          window.location.href = res.session.url ;

        }
      },

      error:(err)=>{
        console.log(err)
      }



    })




  }
}

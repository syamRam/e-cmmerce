import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0) ;
  // headers: any = {
  //   token: localStorage.getItem('userToken')
  //
  // }
  constructor(private _httpClient: HttpClient) {

    this.getLoggedUserCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.numOfCartItems.next( res.numOfCartItems);
      }
    })
  }

  getLoggedUserCart(): Observable<any> {

    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        // headers: this.headers
      })

  }

  removeCartItem(productId: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      // headers: this.headers
    })

  }






  updateCartCount(productId: string, count: number): Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count: count
      },
      {
        // headers: this.headers
      },

    )

  }


    addToCart(productId: string): Observable<any> {

    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId },
      // { headers: this.?headers }
    )




  }


  onlinePayment(cartId: string ,  shippingAddress:any): Observable<any> {

    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {shippingAddress:shippingAddress},
      // { headers: this.headers },
    )




  }

}

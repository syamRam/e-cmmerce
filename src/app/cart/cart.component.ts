import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartDetails: any = {}
  constructor(private _cartService: CartService) {


  }

  removeItem(productId: string) {
    this._cartService.removeCartItem(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data;

      },
      error: (err) => {
        console.log(err);

      }
    })
  }



  updateItemCount(productId: string, count: number) {
    this._cartService.updateCartCount(productId, count).subscribe({
      next: (res) => {
        this.cartDetails = res.data
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  ngOnInit(): void {
    this._cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data;
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}

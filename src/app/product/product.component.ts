import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private _productService: ProductsService,
    private _cartService: CartService) {

  }


  addToCart(productId: string) {
    this._cartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      },
    })
  }

  products: Product[] = [];
  searchTerm: string = '';
  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;


      }
    })

  }

}

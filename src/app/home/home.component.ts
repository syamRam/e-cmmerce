import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import {WishListService} from "../wish-list.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productService: ProductsService,
    private _cartService: CartService,
    private _toastrService: ToastrService,
    private _WishListService:WishListService
  ) {

  }
  isAdded:boolean = false
  categories: any[] = [];
wishListData:string[] = [];
addWishList(id:string){
  this._WishListService.addToWishList(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._toastrService.success(res.message)
      this.wishListData =  res.data ;
      console.log(this.wishListData)

    },
    error:(err)=>{
      console.log(err)

    }
  })

}

  removeWishListItem(id:string){
  this._WishListService.removeWishListItem(id).subscribe({
    next:(res)=>{
      console.log(res)
      this._toastrService.success(res.message)

      this.wishListData = res.data ;
      console.log(this.wishListData)
    },
    error:(err)=>{
      console.log(err)
    }
  })
  }
  addToCart(productId: string) {
    this._cartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res);
        this._toastrService.success(res.message)

      },
      error: (err) => {
        console.log(err);

      },
    })
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },

    },
    nav: true
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

    this._productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data
      }
    })

    this._WishListService.getWishList().subscribe({
      next:(res)=>{
        console.log(res)
        this.wishListData = res.data.map((m:any)=>m._id);
      }
    })
  }



}

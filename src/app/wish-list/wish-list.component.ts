import {Component, OnInit} from '@angular/core';
import {WishListService} from "../wish-list.service";
import {Product} from "../product";
import {ToastrService} from "ngx-toastr";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{
  constructor(private  _WishListService:WishListService ,
    private  _toastrService:ToastrService ,
   private _cartService:CartService          ) {
  }

  wishListData:string[]= [];
  products:Product[]=[];

  removeWishListItem(id:string){
    this._WishListService.removeWishListItem(id).subscribe({
      next:(res)=>{
        console.log(res)
        this._toastrService.success(res.message)

        // this.products = res.data ;
        console.log(this.wishListData)

        const newProductData = this.products.filter((item:any)=>{this.wishListData.includes(item.id)})
        // this.products = newProductData ;
        console.log('Product',this.products)
        console.log("wishList" , this.wishListData)
        console.log("new =>>>" , newProductData)

      },
      error:(err)=>{
        console.log(err)
      }
    })


    // this._WishListService.getWishList().subscribe({
    //   next:(res)=>{
    //     console.log("Res",res)
    //     this.products = res.data ;
    //   }
    // })
  }
  //
  // removeWishListItem(id:string){
  //   this._WishListService.removeWishListItem(id).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }

  addToCart(productId:string)
    {
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

    ngOnInit()
    {
      this._WishListService.getWishList().subscribe({
        next: (res) => {
          this.products = res.data
          this.wishListData = res.data.map((m:any)=>m._id)


          console.log(res)

        },
        error: (err) => {
          console.log(err)
        }
      })

    }

  }

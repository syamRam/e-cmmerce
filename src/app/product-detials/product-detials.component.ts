import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css']
})


export class ProductDetialsComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {

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
        items: 1
      },
      
    },
    nav: true
  }

  productDetails: any;
  productId: any;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    }
    )
    this._productsService.getProductDetails(this.productId).subscribe({
      next: (res) => {
        this.productDetails = res.data;
      }
    })
  }

}

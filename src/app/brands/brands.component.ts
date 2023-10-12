import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _productsService: ProductsService) {

  }
  brands: any[] = [];


  ngOnInit(): void {

    this._productsService.getBrands().subscribe({
      next: (res) => {
        console.log(res)
        this.brands = res.data;

      }
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _productsService: ProductsService) {

  }
  categories: any[] = [];


  ngOnInit(): void {
    this._productsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data
      }
    })

  }


}

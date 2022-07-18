import { Component, OnInit } from '@angular/core';
import { ProductServiceServiceService } from 'src/app/services/product-service-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  table = [];
  constructor(private productService : ProductServiceServiceService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
   this.table =this.productService.productTable;
   console.log("my product", this.table);
  }

}

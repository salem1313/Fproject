import { Component, OnInit } from '@angular/core';
import { ProductServiceServiceService } from '../services/product-service-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name ="Salem";
  location ="Tunisia";
  status ="activée";
  Message ="";
tableData =[];
  constructor(private router : Router , private productService :ProductServiceServiceService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.tableData = this.productService.productTable;
  }

  getStatus(){
    return this.status;
  }
  getMessage(){
    console.log("My new message");
  }
  goToRegister(){
    this.router.navigate(["/register"]);
  }

}

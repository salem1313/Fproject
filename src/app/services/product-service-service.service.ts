import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceServiceService {

  
  productTable = [
    {productName :"orange" , productPrice : 20 , productQuantity : 5},
    {productName :"PineApple" , productPrice : 10 , productQuantity : 3},
    {productName :"Fig" , productPrice : 50 , productQuantity : 7},
    {productName :"Banana" , productPrice : 40 , productQuantity : 10}
  ]
  constructor() { }
}

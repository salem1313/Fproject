import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName= "Salem"; 
  active= true;

  datalist = [
    {name :"Salem", code : 165, country :"Tunisia"},
    {name :"Sabrin", code : 1000, country :"Morraco"},
    {name :"Ahmed", code : 243, country :"Algeria"}

  ]

  name= "mousa";
  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  goToUser(){
    this.route.navigate(["/user"])
  }

}

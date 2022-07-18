import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
tunisia = true;
algeria = false;
brazil = false;

changeCountry(){
  this.tunisia = false;
  this.brazil = true;
  this.algeria = false;
}

}

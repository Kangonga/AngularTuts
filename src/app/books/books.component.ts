import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
  name="clean code";
  author="robert martin"
  isDisabled = false
  propertyBound = "Learning property binding"
  eventValue:string = ""
  handleClick(){
    this.isDisabled = !this.isDisabled
  }
  handleInput(event:any){
    this.eventValue = event.target.value
  }


}

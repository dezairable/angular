import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {

  newName : string

  test : string
  txt : string = '';

  constructor() { }

  

  ngOnInit(): void {
  }

  persons : any [] = [
    {
      name : ''
    }
  ]

  displayValue() {
    return {
      name : this.newName
    }
  }

  insertValue() {
    // for(var i=0; i < this.persons.length; i++) {
    //   if (this.persons[i].name == this.displayValue().name) {
    //     console.log("already exists");
    //   }
    //   this.persons[i].push("aaa")
    // }
    this.txt = this.test;
    console.log(this.txt);
  }




}

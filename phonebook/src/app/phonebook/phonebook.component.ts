import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {

  newFirstname : string = 'Coder'
  newLastname : string = 'Byte'
  newNum : number = 123


  constructor() { }


  ngOnInit(): void {
  }

  persons : any [] = [
    
  ]


  insertValue() {
    this.persons.push(
      {
        firstname : this.newFirstname,
        lastname : this.newLastname,
        number : this.newNum
      }
    )
    this.clearFields();
  }

  // sortPersons() {
  //   var sorted = this.persons
  // }

  clearFields() {
    this.newFirstname = '';
    this.newLastname = '';
    this.newNum = null;
  }




}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.page.html',
  styleUrls: ['./cantantes.page.scss'],
})
export class CantantesPage implements OnInit {
public resultado : string;

  constructor() { }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => this.resultado=JSON.stringify(json,null,'\t'));
  
  }

}

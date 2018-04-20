import { Component, OnInit } from '@angular/core';
import {Ingredient} from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient:Ingredient[]= [
    new Ingredient('Apples', 39),
    new Ingredient('orange', 10),
    new Ingredient('banana', 40),
    new Ingredient('papaya', 30),
    new Ingredient('mango', 70),
    new Ingredient('guava', 50)


  ]

  constructor() {
    console.log(this.ingredient);
  }

  ngOnInit() {
  }

}

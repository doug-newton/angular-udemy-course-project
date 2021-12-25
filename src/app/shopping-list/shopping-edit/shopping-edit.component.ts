import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('ingredientsForm') ingredientsForm: NgForm

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.ingredientsForm.value.nameInput,
        this.ingredientsForm.value.amountInput
      )
    )
  }

}

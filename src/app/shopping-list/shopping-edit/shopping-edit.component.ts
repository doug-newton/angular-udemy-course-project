import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  @ViewChild('ingredientsForm') ingredientsForm: NgForm

  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(index => {
      this.editedItemIndex = index
      this.editMode = true
      this.editedItem = this.shoppingListService.getIngredient(index)
      this.ingredientsForm.setValue({
        nameInput: this.editedItem.name,
        amountInput: this.editedItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onAddIngredient(form: NgForm) {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        new Ingredient(
          form.value.nameInput,
          form.value.amountInput
        )
      )
    }
    else {
      this.shoppingListService.addIngredient(
        new Ingredient(
          form.value.nameInput,
          form.value.amountInput
        )
      )
    }
  }

}

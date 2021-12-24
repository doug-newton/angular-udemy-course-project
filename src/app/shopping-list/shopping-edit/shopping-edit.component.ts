import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter  } from '@angular/core';
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

  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    )
  }

}

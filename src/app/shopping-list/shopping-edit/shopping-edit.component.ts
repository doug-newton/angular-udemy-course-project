import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdd: EventEmitter<Ingredient> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef

  onAddIngredient() {
    this.ingredientAdd.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    )
  }

}

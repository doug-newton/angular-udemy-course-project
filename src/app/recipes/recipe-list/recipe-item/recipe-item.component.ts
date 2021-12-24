import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  host: {
    "(click)": "onClick($event)"
  }
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe
  @Output() recipeSelect: EventEmitter<void> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event) {
    this.recipeSelect.emit()
  }

}

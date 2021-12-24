import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelect: EventEmitter<Recipe> = new EventEmitter

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe', 'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'),
    new Recipe('Another Test Recipe','This is another test recipe', 'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelect.emit(recipe)
  }

}

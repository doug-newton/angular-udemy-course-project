import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelect: EventEmitter<Recipe> = new EventEmitter

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'),
        new Recipe('Another Test Recipe', 'This is another test recipe', 'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'),
    ]

    public getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

}
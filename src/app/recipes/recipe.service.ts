import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelect: EventEmitter<Recipe> = new EventEmitter

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty schnitzel -- just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Crumbed Chicken', 1),
                new Ingredient('French Fries', 20)
            ]
        ),

        new Recipe('Big Fat Burger',
            'What else do you need to know?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Beef Patty', 1)
            ]
        ),

    ]

    public getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

}
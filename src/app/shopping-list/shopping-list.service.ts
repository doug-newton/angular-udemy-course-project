import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  addIngredient(ingredient) {
    this.ingredients.push(ingredient)
  }

  getIngredients(): Ingredient[] {
      return this.ingredients.slice()
  }

}
import { Subject } from "rxjs"
import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService {

  ingredientsChanged: Subject<Ingredient[]> = new Subject
  startedEditing: Subject<number> = new Subject

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients)
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients)
  }

  getIngredients(): Ingredient[] {
      return this.ingredients.slice()
  }

  getIngredient(index:number) : Ingredient {
    return this.ingredients[index]
  }

}
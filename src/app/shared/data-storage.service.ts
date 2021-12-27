import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
    ){}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put('http://localhost:8080/api/recipes', recipes).subscribe()
    }

    fetchRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>('http://localhost:8080/api/recipes')
        .pipe(tap(recipes => {
            this.recipeService.setRecipes(recipes)
        }))
    }
}
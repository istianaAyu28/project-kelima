import { Injectable, EventEmitter } from '@angular/core';
import{ Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service'
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Burger','This is simply a test',
  '../src/app/img/Bibimbap-homemade-burgers.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2)]),

    new Recipe('Fried Rice','This is simply a test',
    '../src/app/img/20160206-fried-rice-food-lab-68-1500x1125.jpg',
  [
    new Ingredient('rice',1),
    new Ingredient('meal',3),
    new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice(); 
  }
  addIngredientsShoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredient(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
constructor(private slsService: ShoppingListService) { }

}

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cansin Eggs',
      'Great boiled eggs with parmesan sauce',
      'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg',
      [new Ingredient('süt', 2), new Ingredient('bal', 3)]
    ),
    new Recipe(
      'Cansin Eggs',
      'Great boiled eggs with parmesan sauce',
      'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg',
      [new Ingredient('süt', 2), new Ingredient('bal', 3)]
    ),
    new Recipe(
      'Cansin Eggs',
      'Great boiled eggs with parmesan sauce',
      'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/food-top10/pagePropertiesImage/thai-som-tum.jpg.jpg',
      [new Ingredient('süt', 2), new Ingredient('bal', 3)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

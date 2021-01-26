import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    ingredients: ['French Fries', 'Pork', 'Salad']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Spaghetti_con_scampi_03_07_2019.jpg',
    ingredients: ['Pasta', 'Tomato Sauce', 'Meat']
  },

]
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
     return {
      ...this.recipes.find( (recipe) => {
        if (recipe.id === recipeId) {
          console.log(recipe);
          return  recipe;
        } 
     })
     }
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }


}

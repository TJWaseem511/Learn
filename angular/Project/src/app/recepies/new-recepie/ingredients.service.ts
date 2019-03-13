import { Ingredient } from 'src/app/shared/ingredient.model';
//This is a centralized service to collect all the ingredients from 
export class IngredientService{
    private ingredients: Ingredient[]=[];
    valid: boolean = false;
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        console.log(ingredient.name+" pushed successfully");
    }
    ingredientsCount(){
        return this.ingredients.length;
    }
    getIngredients(){
        //console.log(this.ingredients);
        return this.ingredients;
    }
}
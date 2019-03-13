import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    shoppingListClickListener = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 10),
        new Ingredient("Tomatoes", 20)
      ];
    getList(){
        return this.ingredients;
    }
    getItem(index: number): Ingredient{
        return this.ingredients[index];
    }
    updateList(indexToEdit:number, updatedName: string, updateAmount: number){
        //console.log(indexToEdit);
        this.ingredients[indexToEdit].name = updatedName;
        this.ingredients[indexToEdit].amount = updateAmount;
    }
    deleteItem(index: number){
        return this.ingredients.splice(index,1)[0];
    }
    pushtoList(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        console.log(ingredient.name);
    }
    addToCart(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
    }
}
import { Recepie } from './recepie.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecepieService{
    private recepies: Recepie[] = [
        new Recepie('Biryani', 'Hyderabadi Dish', 'https://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg',[]),
        new Recepie('Mandi', 'Authentic Yemani Dish', 'https://i.ytimg.com/vi/9DTIO_173ME/maxresdefault.jpg',
        [new Ingredient('Rice', 5), new Ingredient('Mutton/Chicken', 1), new Ingredient('Dry Fruits', 1), new Ingredient('Fried Onions', 2), new Ingredient('Lemon', 1)]),
        new Recepie('Shawarma', 'Authentic arabian Dish', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg',
        [new Ingredient("Chicken", 5), new Ingredient("Tomato", 1), new Ingredient("Cucumber", 1), new Ingredient("Mayonnase", 4)])];
    recepieSelected = new EventEmitter<Recepie>();
    getRecepies(){
        return this.recepies;
    }
    getRecepie(name: string){
        for(let r of this.recepies)
            if(r.name === name)
                return r;
    }
    addRecepie(recepie: Recepie){
        this.recepies.push(recepie);
        console.log("Recepie with name "+recepie.name+" added successfully");
        console.log(this.recepies[this.recepies.length-1]);
    }
}
import { Recepie } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { DatabaseService } from '../shared/database.service';

@Injectable()

export class RecepieService{
    recepieSubject : Subject<Recepie[]> = new Subject<Recepie[]>();
    /* private recepies: Recepie[] = [
        new Recepie('Biryani', 'Hyderabadi Dish', 'https://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg',[]),
        new Recepie('Mandi', 'Authentic Yemani Dish', 'https://i.ytimg.com/vi/9DTIO_173ME/maxresdefault.jpg',
        [new Ingredient('Rice', 5), new Ingredient('Mutton/Chicken', 1), new Ingredient('Dry Fruits', 1), new Ingredient('Fried Onions', 2), new Ingredient('Lemon', 1)]),
        new Recepie('Shawarma', 'Authentic arabian Dish', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg',
        [new Ingredient("Chicken", 5), new Ingredient("Tomato", 1), new Ingredient("Cucumber", 1), new Ingredient("Mayonnase", 4)])]; */    

    constructor(private httpService: HttpClient, private dbService: DatabaseService){
        this.dbService.get().subscribe(
            (recepies: Recepie[]) => {
                this.setRecepies(recepies);
            }
        );
    }
    private recepies: Recepie[];
    recepieSelected = new EventEmitter<Recepie>();
    getRecepies(): Recepie[]{  
        return this.recepies;
    }
    setRecepies(recepies: Recepie[]): void{
        this.recepies = recepies;
        this.recepieSubject.next(this.recepies);
    }
    getRecepie(name: string): Recepie{
        return this.recepies[this.getRecepieIndex(name)];
    }
    getRecepieIndex(name: String): number{
        for(let i in this.recepies)
            if(this.recepies[i].name == name)
                return +i;
    }
    addRecepie(recepie: Recepie): void{
        this.recepies.push(recepie);
        //console.log("Recepie with name "+recepie.name+" added successfully");
        //console.log(this.recepies[this.recepies.length-1]);
    }

    updateRecepie(recepieToUpdate: Recepie): void{
        let index = this.getRecepieIndex(recepieToUpdate.name);
        this.recepies[index] = recepieToUpdate;
        //
        //while(recepieToUpdate.name!)
        //this.recepies.splice();
    }
    
    deleteRecepie(recepie: Recepie): void{
        this.recepies.splice(this.getRecepieIndex(recepie.name), 1);
    }
}
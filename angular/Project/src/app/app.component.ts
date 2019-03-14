import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
   this.route.params.subscribe((params: Params)=>{
     console.log(params);
   }); 
  }
  title = 'Project';
  displayRecepies:boolean = true;
  navEvent(displayRecepies){
    this.displayRecepies = displayRecepies;
  }
}

import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecepieService } from './recepies/recepie.service';
import { DatabaseService } from './shared/database.service';
import { Recepie } from './recepies/recepie.model';
import { UserDetails } from './shared/userDetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit{

  constructor(private route: ActivatedRoute, 
    private recepieService: RecepieService, 
    private dbService: DatabaseService){
    //Initializing the recepies array by getting the recepies data from the remote DB
    /* this.dbService.get().subscribe(
      (recepies: Recepie[]) => {
          this.recepieService.setRecepies(recepies);
      }
  );      */
  }

  ngOnInit(){
   this.route.params.subscribe((params: Params)=>{
     //console.log(params);
   }); 
  }
  title = 'Project';
}

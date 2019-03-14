import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppinglist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recepie: Recepie;
  name: string;
  constructor(private shoppingListService: ShoppingListService, 
    private route: ActivatedRoute, 
    private recepieService: RecepieService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        //console.log("From Recepie detail component:");
        //console.log(params);
        this.name = params['name'];
        this.recepie = this.recepieService.getRecepie(this.name);
      }
    );
  }

  addToCart(){
    this.shoppingListService.addToCart(this.recepie.ingredients);
  }
  onDelete(){
    this.recepieService.deleteRecepie(this.recepie);
    this.router.navigate(['../']);
  }
}

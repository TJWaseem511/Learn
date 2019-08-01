import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDetails } from '../shared/userDetails.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: []
})
export class RecepiesComponent implements OnInit , OnDestroy{
  recepieSelected: Recepie;

  constructor(private recepieService: RecepieService, 
    private route: ActivatedRoute,
    private currentUser: UserDetails,) { }

  ngOnInit() {
     this.route.params.subscribe((params: Params)=>{
       //console.log("From Recepie:");
       //console.log(params);
     }); 
    this.recepieService.recepieSelected.subscribe(
      (recepie: Recepie) => {
        this.recepieSelected = recepie;
        //console.log(recepie.description);
      }
    );
    console.log("Current User Details:");
    console.log(this.currentUser);
  }
  ngOnDestroy(){}

}

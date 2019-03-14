import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit , OnDestroy{
  recepieSelected: Recepie;

  constructor(private recepieService: RecepieService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe((params: Params)=>{
       console.log("From Recepie:");
       console.log(params);
     }); 
    this.recepieService.recepieSelected.subscribe(
      (recepie: Recepie) => {
        this.recepieSelected = recepie;
        //console.log(recepie.description);
      }
    );
  }
  ngOnDestroy(){}

}

import { Component, OnInit} from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[];

  constructor(private recepieService: RecepieService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      //console.log("Recepie list component:")
      //console.log(params);
    });
    this.recepies = this.recepieService.getRecepies();
  }

}

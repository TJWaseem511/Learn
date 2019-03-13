import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  recepie: string;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.recepie = params.name;
        console.log(params);
      }
    );
  }

}

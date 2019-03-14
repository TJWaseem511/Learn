import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepie-start',
  templateUrl: './recepie-start.component.html',
  styleUrls: ['./recepie-start.component.css']
})
export class RecepieStartComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      console.log("Recepie start component:");
      console.log(params);
    });
  }

}

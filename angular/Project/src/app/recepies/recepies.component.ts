import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit {
  recepieSelected: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
    this.recepieService.recepieSelected.subscribe(
      (recepie: Recepie) => {
        this.recepieSelected = recepie;
        console.log(recepie.description);
      }
    );
  }

}

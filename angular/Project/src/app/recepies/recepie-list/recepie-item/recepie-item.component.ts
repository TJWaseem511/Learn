import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input('item') recepie_item: Recepie;
  @Input() index:number;
  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
  }
  onClicked(){
    //console.log("Recepie item is clicked");
    this.recepieService.recepieSelected.emit(this.recepie_item);
    //this.recepieSelected.emit();
  }
}

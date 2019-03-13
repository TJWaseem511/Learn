import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    @Output("displayEvent") navDisplay = new EventEmitter<boolean>();
    displayRecepies: boolean = true;

    recepiesClicked(){
            this.displayRecepies = true;
            this.navDisplay.emit(this.displayRecepies);
            //console.log("Recepies clicked ===> " + this.displayRecepies);
    }
    shoppingListClicked(){
            this.displayRecepies = false;
            this.navDisplay.emit(this.displayRecepies);
        //console.log("shopping list clicked ===> " + this.displayRecepies);
    }
}
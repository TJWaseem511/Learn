import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';
import { RecepieService } from '../recepies/recepie.service';
import { Recepie } from '../recepies/recepie.model';
import { UserDetails } from '../shared/userDetails.service';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit{

    isLoggedIn: boolean = false;
    constructor(private dbService: DatabaseService, 
        private recepiesService: RecepieService,){

    }

    ngOnInit(){
       
    }
    saveData():void{
        this.dbService.put(this.recepiesService.getRecepies()).subscribe(
            (response: Recepie[]) => { console.log(response.length+" Records pushed successfully");},
            (response: Response) => { console.log("Error is " + response)}
        );
        //console.log("saveData method");
    }
    fetchData():void{
        this.dbService.get().subscribe(
            (recepies) => {
                this.recepiesService.setRecepies(recepies);
            },
            (response)=>{console.log(response);}
        );
    }
}
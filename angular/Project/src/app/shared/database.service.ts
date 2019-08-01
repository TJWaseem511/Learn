import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recepie } from '../recepies/recepie.model';

@Injectable()
export class DatabaseService {

  constructor(private httpclient: HttpClient) { }

  put(recepies: Recepie[]){
    return this.httpclient.put('https://recepieproject-f3491.firebaseio.com/recepies.json', recepies);
    //console.log(recepies.length + " records Inserted in DB");
  }

  get(){
    return this.httpclient.get<Recepie[]>('https://recepieproject-f3491.firebaseio.com/recepies.json');
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  shoppingForm: FormGroup; //Stores the whole form as an object
  slcListener: Subscription; // Subject to handle the listeners
  editMode: boolean = false; //Boolean value to represent the edit/Add mode
  private index: number = null; // Variable to store the index of the editing ingredient
  deletedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder) {
    //shoppingListService - Service to handle/Access the shopping list
    //FormBuilder - Form builder Provider
   }
  ngOnInit() {
    //Creating the Form
    this.shoppingForm = this.fb.group({
      'ingName': [null, Validators.required],
      'ingAmount': [null, Validators.required]
    });

    //Added Listener to the Subject
    //Following method will be executed everytime the ingredient item is clicked
    this.slcListener= this.shoppingListService.shoppingListClickListener.subscribe((index: number)=>{
      this.editMode = true;//Setting editMode = true as edit event has been triggered by Subject
      this.index = index;//Index of the ingredient to be edited
      let item:Ingredient = this.shoppingListService.getItem(index);//Storing the ingredient
      //Populating the values in fomrm Fields using setValue()
      this.shoppingForm.setValue({
        'ingName': item.name,
        'ingAmount': item.amount
      });
      this.deletedItem = null;
    });
  }
  onSubmit(){
    if(this.editMode){
      //If edit mode, then Updating the value
      this.shoppingListService.updateList(this.index, this.shoppingForm.value.ingName, this.shoppingForm.value.ingAmount);
    } else{
    //Else pushing a new Ingredient
    this.shoppingListService.pushtoList( new Ingredient(this.shoppingForm.value.ingName, this.shoppingForm.value.ingAmount));
    }
    //setTimeout(()=>{this.onClear()},3000);
    //Finally cleaning the form.
    this.onClear();
  }
  onClear(){
    //Cleaning all the variables
    this.editMode = false; //Setting edit mode back to normal.
    //Setting deleteItem back to null
    this.shoppingForm.reset();
  }
  onDelete(){
    this.deletedItem = this.shoppingListService.deleteItem(this.index);
    this.onClear();
  }
  ngOnDestroy(){
    this.slcListener.unsubscribe();//Unsubscribing from the Subject
  }
  }

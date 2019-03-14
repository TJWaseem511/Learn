import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Recepie } from '../recepie.model';
import { IngredientService } from './ingredients.service';
import { RecepieService } from '../recepie.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-recepie',
  templateUrl: './new-recepie.component.html',
  styleUrls: ['./new-recepie.component.css'],
  providers: [IngredientService]
})
export class NewRecepieComponent implements OnInit, OnDestroy {


  //Reference for the RecepieForm
  recepieForm: FormGroup;
  editMode: boolean = false;
  editRecepieName: string;
  editRecepie: Recepie;
  private subscription:Subscription;

  //Constructor
  constructor(private ingredientService: IngredientService, 
    private recepieService: RecepieService, 
    private fb: FormBuilder,
    private route: ActivatedRoute
   ) { }

  ngOnInit() {

    //Using routes to determine if new-recepie component is invoked by new-Recepie button or by edit-Recepie button
    //Subscribing to route changes
     this.subscription = this.route.params.subscribe((params: Params)=>{
      //Checking if it we have 
      this.editMode = params.name? true: false;
      if(this.editMode){
        this.editRecepieName = params.name;
        console.log("Recepie to edit:"+params.name);
      }
      console.log("editMode: "+ this.editMode);
    });

    if(!this.editMode){
    //If editMode = false, this block will be create a empty RecepieForm
    //Creating empty Recepie Form
    this.recepieForm = this.fb.group({
      'name': ['', Validators.required],//Recepie Name
      'description': ['', Validators.required],//Recepie Description
      'url': ['', Validators.required],//Recepie image URL
      'ingredients': this.fb.array([this.ingredient()])//Recepie ingredients Array
    });
    }
    else
    {
      //If editMode = true, then it means we are editing an existing recepie
      //This block will create a form with populated recepie fields

      //Getting the details of the recepie to edit
      this.editRecepie = this.recepieService.getRecepie(this.editRecepieName);

      //Creating a form with details of the recepie, fetched in the above line
      this.recepieForm = this.fb.group({
        'name': [this.editRecepie.name, Validators.required],//Recepie Name
        'description': [this.editRecepie.description, Validators.required],//Recepie Description
        'url': [this.editRecepie.imgURL, Validators.required],//Recepie image URL
        'ingredients': this.fb.array(this.ingredients(this.editRecepie.ingredients))//Recepie ingredients Array
      });
    }

  }//ngOnInIt() ends

  //Push ingredient to the ingredients FormArray
  addIngredient(){
    (<FormArray>this.recepieForm.get('ingredients')).push(this.ingredient());
  }

  //Create an instance of empty FormGroup(Ingredient) & retuns it
  ingredient():FormGroup{
    return this.fb.group({
      'name': ['', Validators.required],
      'amount':['', Validators.required]
    });
  }

  //This method will return a FormGroupArray
  //The array consists of the list of ingredients
  ingredients(ingS:Ingredient[]): FormGroup[]{
    let array: FormGroup[]=[];
    for(let ing of ingS) {
      array.push(this.fb.group({
        'name': [ing.name, Validators.required],
        'amount':[ing.amount, Validators.required]
        }));
      /* console.log(array.length+" --->");
      console.log(ing); */
    }
    return array;
  }

  //Function executed when Create recepie button is pressed
  onSubmit():void{
    for(let ing of this.recepieForm.get('ingredients').value){
      this.ingredientService.addIngredient(<Ingredient>ing);
    }//stores all the ingredients in the ingredientService
    let value = this.recepieForm.value;
    let recepie:Recepie = new Recepie(value.name, value.description, value.url, this.ingredientService.getIngredients());
    if(!this.editMode)
    this.recepieService.addRecepie(recepie);
    else{
      this.recepieService.updateRecepie(recepie);
    }
    this.recepieForm.reset();
  }//createRecepie() ends

  onClear():void{
    this.recepieForm.reset();
//    this.recepieForm.controls.
    //console.log(this.recepieForm.controls.ingredients);
  }

  onDelete(id: number): void{

    (<FormArray>this.recepieForm.get('ingredients')).removeAt(id);

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
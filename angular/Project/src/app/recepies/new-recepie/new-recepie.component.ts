import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Recepie } from '../recepie.model';
import { IngredientService } from './ingredients.service';
import { RecepieService } from '../recepie.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-new-recepie',
  templateUrl: './new-recepie.component.html',
  styleUrls: ['./new-recepie.component.css'],
  providers: [IngredientService]
})
export class NewRecepieComponent implements OnInit {

  //Reference for the RecepieForm
  recepieForm: FormGroup;
  editMode: boolean = false;
  editRecepieName: string;
  editRecepie: Recepie;


  //Constructor
  constructor(private ingredientService: IngredientService, 
    private recepieService: RecepieService, 
    private fb: FormBuilder,
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
    //Defining the RecepieForm
    this.recepieForm = this.fb.group({
      'name': ['', Validators.required],//Recepie Name
      'description': ['', Validators.required],//Recepie Description
      'url': ['', Validators.required],//Recepie image URL
      'ingredients': this.fb.array([this.ingredient()])//Recepie ingredients Array
    });

    this.route.params.subscribe((params: Params)=>{
      this.editRecepieName = params.name;
      //console.log(params);
      this.editMode = params.name? true: false;
    });
    if(this.editMode){
      this.editRecepie = this.recepieService.getRecepie(this.editRecepieName);
      this.recepieForm.patchValue({
        'name': this.editRecepie.name,
      'description': this.editRecepie.description,
      'url': this.editRecepie.imgURL,
      //'ingredients': this.editRecepie.ingredients
      });
      console.log(this.editRecepie);
    }
  }

  addIngredient(){
    (<FormArray>this.recepieForm.get('ingredients')).push(this.ingredient());
    //Push ingredient to the ingredients FormArray
  }
  ingredient():FormGroup{
    //Returns an instance of ingredient
    return this.fb.group({
      'name': ['', Validators.required],
      'amount':['', Validators.required]
    });
  }

  createRecepie():void{
    //Function executed when Create recepie button is pressed
    for(let ing of this.recepieForm.get('ingredients').value){
      this.ingredientService.addIngredient(<Ingredient>ing);
    }//stores all the ingredients in the ingredientService
    let value = this.recepieForm.value;
    let recepie:Recepie = new Recepie(value.name, value.description, value.url, this.ingredientService.getIngredients());
    this.recepieService.addRecepie(recepie);
    this.recepieForm.reset();
    /* console.log(this.ingredientService.getIngredients());
    console.log(value); */
  }
}

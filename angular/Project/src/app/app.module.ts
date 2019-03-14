import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewRecepieComponent } from './recepies/new-recepie/new-recepie.component';

/* const appRoutes: Routes = [
  {path: '', component: RecepiesComponent, pathMatch: 'full'},
  {path: 'Recepies', component: RecepiesComponent},
  {path:'Shopping', component:ShoppingListComponent }
]; */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecepieStartComponent,
    PageNotFoundComponent,
    NewRecepieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

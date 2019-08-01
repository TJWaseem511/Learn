import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

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
import { DatabaseService } from './shared/database.service';
import { RecepieService } from './recepies/recepie.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthService } from './shared/auth.service';
import { UserDetails } from './shared/userDetails.service';

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
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//To use the HTTP related services in the application
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    DatabaseService, 
    RecepieService, 
    AuthService,
    UserDetails
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewRecepieComponent } from './recepies/new-recepie/new-recepie.component'; 
import { AuthenticationComponent } from './authentication/authentication.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/Recepies', pathMatch: 'full'},
  {path: 'Recepies', component: RecepiesComponent, children: [
    {path: '', component: RecepieStartComponent},
    {path: 'New', component: NewRecepieComponent},
    {path: ':name', component: RecepieDetailComponent},
    {path: ':name/edit', component: NewRecepieComponent}
  ]},
  {path: 'authentication', component: AuthenticationComponent},
  {path:'Shopping', component:ShoppingListComponent },
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule{}
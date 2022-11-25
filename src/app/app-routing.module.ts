import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmsListComponent} from './films-list/films-list.component'
import {FilmDetailComponent} from "./film-detail/film-detail.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuardService} from "./Services/auth-guard.service";
import {AuthenticationComponent} from "./authentication/authentication.component";

const routes: Routes = [
  {path:'',component:FilmsListComponent},
  {path:'films/:id',component:FilmDetailComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardService]},
  {path:'auth',component:AuthenticationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

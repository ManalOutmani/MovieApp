import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FilmService} from "./Services/film.service";

import {FormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmItemComponent,
    FilmDetailComponent,

    AdminComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    BrowserAnimationsModule

  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

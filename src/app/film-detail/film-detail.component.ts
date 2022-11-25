import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {film} from '../Model/film'
import {FilmService} from "../Services/film.service";
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

   reference: any;
   film!:film;
   title!:string;
  constructor(private filmService:FilmService,private router:ActivatedRoute,private _router: Router) {


    this.router.params.subscribe(
      (params:Params) => {
        console.log('film id = ', params['id']);
        this.reference = params['id'];

      }
    );
  }
  getPoster(){

  }
  ngOnInit(): void {

    this.router.params.subscribe(
      (params:Params) => {
        console.log('film id = ', params['id']);
        this.reference = params['id'];
        console.log('here '+params['id']);
        this.loadFilm(this.reference);
      }
    );


  }
  loadFilm(id:string){
    this.filmService.getFilm(id).then(
      (r) => {
        console.log('loadFilm ==> ', r);
        this.film = r;

      }
    );
  }
  retour(): void {
    this._router.navigate(['/films']);
  }

}

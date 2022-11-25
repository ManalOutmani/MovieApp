import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {film} from '../Model/film'
import{FilmService} from "../Services/film.service"
import {Router} from "@angular/router";
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film !:film ;
  @Output() filmselected=new EventEmitter<string>();
  constructor(private filmService:FilmService,private route:Router) { }

  ngOnInit(): void {

  }
  Onselect(){
    this.route.navigate(['/films/'+this.film.id])
    this.filmselected.emit(this.film.title);

  }
  getUrl(name : any){
    return this.filmService.getimagefromapi(name);
  }

}

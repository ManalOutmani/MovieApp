import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {film} from "../Model/film";
import{FilmService} from "../Services/film.service"



@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  @Input() films:Array<film>=[];
  @Output() onSelected=new EventEmitter<film>();

  pageNumber:number=1;
  searchedText!:string;


  constructor(private filmService:FilmService) {

  }

  ngOnInit(): void {

    this.filmService.getAllFilms().then((data:any)=>this.films=data.results);

  }
  affiche($event:string){
    alert($event);
  }
  getColor(id:number){
    if(id%2==0){
      return "green";
    }else{
      return "red";
    }
  }
  search(){
    console.log(this.searchedText);
    this.filmService.getFilmsFromServer(this.searchedText,this.pageNumber).
    then((data:any)=>{this.films=data.results});
  }
  _searchTextInputChanged(){
    this.filmService.getFilmsFromServer(this.searchedText,this.pageNumber).
    then((data:any)=>{this.films=data.results});
  }




}

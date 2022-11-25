import { Injectable } from '@angular/core';
import {film} from "../Model/film";
import {HttpClient} from "@angular/common/http";

const API_TOKEN="0326a15e822e0b66c87142c8a6590d26";

@Injectable({
  providedIn: 'root'
})

export class FilmService {

    constructor(private http:HttpClient) {
  }
  name!:String;
  add(film:film){

  }
  get(id:number){
  }
  getAllFilms(){
      const url='https://api.themoviedb.org/3/movie/popular?api_key='+API_TOKEN;
      return this.http.get<Array<film>>(url)
        .toPromise()
        .then((response:any) =>response)
        .catch((error)=>console.log(error))
  }
  getimagefromapi( poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }
  getFilmsFromServer(text:string,page:number){
    const url ='https://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN+'&query='+text;
    console.log(text);
    return this.http.get<Array<film>>(url).toPromise().then((response : any)=> response)
      .catch((error)=> console.error(error));

  }
  getFilm(id: string) {
    const url ='https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_TOKEN;

    return this.http.get(url).toPromise().then((response : any)=> response)
    .catch((error)=> console.error(error));

  }


}

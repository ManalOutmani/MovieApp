export class film{
  id :number;
  vote_average:number;
  title:string;
  poster_path:string;
  original_title:string;
  overview:string;
  release_date:string;


  constructor(id: number, vote_average: number, title: string, poster_path: string, original_title: string, overview: string, release_date: string) {
    this.id = id;
    this.vote_average = vote_average;
    this.title = title;
    this.poster_path = poster_path;
    this.original_title = original_title;
    this.overview = overview;
    this.release_date = release_date;
  }




}

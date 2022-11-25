import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private Auth:Boolean=false;
  constructor() { }
  isAuthentified(){
    console.log("authentificated");
    return true
  }
}

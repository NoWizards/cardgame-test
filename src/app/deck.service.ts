import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICard } from "./card";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  //using local url, but this is the same process as using a real URL to get the decklist
  private _localUrl: string ="/assets/decklist/deck.json"

  constructor(private http: HttpClient) { }
  getMyDeck(): Observable<ICard[]>{
    return  this.http.get<ICard[]>(this._localUrl);

  }
  drawACard(){
    /* 
    this logic should be implemented server-side:
    draw a card from the player's deck and remove it from selectable options
    */


    return Math.floor(Math.random()*10 + 1);
  }
}

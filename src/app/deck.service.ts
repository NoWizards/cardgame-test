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
  private myHand = [{
    id: 10,
    name: 'new card',
    img: './url',
    desc: 'wont use it',
    mana: 12,
    hp: 11,
    dmg: 9
  },{
    id: 10,
    name: 'new card',
    img: './url',
    desc: 'wont use it',
    mana: 12,
    hp: 11,
    dmg: 9
  }];

  constructor(private http: HttpClient) { }
  getMyHand(): Observable<ICard[]>{

    return  this.http.get<ICard[]>(this._localUrl);

  }

  /* 
    This logic should be implemented server-side:
  */
  shuffleDeck(array){
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  }
  drawACard(){
    return Math.floor(Math.random()*10 + 1);
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject  } from "rxjs";
import { DeckService } from "./deck.service";



@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
 /* Local side game status */
 /* List of local properties that will be displayed in the game UI */
 /* bind each property to displayed components using Subject Observers */
  status ={
    player1Turn: true,
    player1Hp: 30,
    player1Hand$:[],
    player1Graveyard:[],
    player1Field:[],
    player1LeftCards:24,
    player2Hp: 30,
    player2Graveyard:[],
    player2Field:[],
    player2LeftCards:25    
  }
  handSubject = new Subject();
  
private _bfUrl: string ="/assets/imgs/battlegrounds/basic.png";

// select who plays first, at random... 
private firstTurn(){
  let a = Math.random()>0.5?true:false;
  let msg = a?'End Turn':'Enemy Turn';
  if(!a)this.enemyTurn();
  return {isP1:a, msg: msg} 
}
/* player turn will send and receive events using websockets */

  constructor(private _deckService: DeckService) { 
    this._deckService.getMyHand().subscribe(data => {this.status.player1Hand$ = this._deckService.shuffleDeck(data); this.handSubject.next(data)});
  }
  // keep track of player turns (self or enemy)
  gameTurns = new BehaviorSubject(this.firstTurn());
  //keep track of cards in hand
  


  selectBattleField(): Observable<string>{
    //returns the battlefield url for the game
    return  Observable.create((observer:any)=>{ observer.next(this._bfUrl); observer.complete()})
  }


  endTurn(){
    this.gameTurns.next({isP1:false, msg:'Enemy Turn'});
    this.enemyTurn();
  }
  /* simulate the enemy player turn, waiting 2-4 secs...
  !!! todo: use websocket events and wait until enemy end their turn.
   */
  enemyTurn(){
    let randomTime = Math.random()*2000 + 2000;
    setTimeout(()=>{
      this.gameTurns.next({isP1:true, msg:'End Turn'});
    }, randomTime)
  }

  /* play card */
  playCard(id:number){
    this.status.player1Hand$.splice(this.status.player1Hand$.findIndex(x=> x.id==id),1);
    this.handSubject.next(this.status.player1Hand$);
  }


  /* !!!TODO:    (this isn't even a playable game, please buy our DLC in  EA store) */
  /* 
  -Bind a manaPool var to card-component in order to highlight the playable cards in each turn.
  -Disable functions when its enemy turn (this is pretty easy, as we only have to check a boolean var before performing any action).
  -Enable a flip card animation when a new card is added to hand (css has a rare bug with backface-visibility  property)
  -Create an enemy component with some hp and subscribe this variable to this.status.player2Hp$

  */

}

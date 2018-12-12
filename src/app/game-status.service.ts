import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject  } from "rxjs";


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
    player1Hand:[],
    player1Graveyard:[],
    player1Field:[],
    player1LeftCards:24,
    player2Hp: 30,
    player2Hand:[],
    player2Graveyard:[],
    player2Field:[],
    player2LeftCards:25    
  }
  


private _bfUrl: string ="/assets/imgs/battlegrounds/basic.png";

// select who plays first, at random... 
private firstTurn(){
  let a = Math.random()>0.5?true:false;
  let msg = a?'End Turn':'Enemy Turn';
  if(!a)this.enemyTurn();
  return {isP1:a, msg: msg} 
}
/* player turn will send and receive events using websockets */

  constructor(private http: HttpClient) { }
  // keep track of player turns (self or enemy)
  gameTurns = new BehaviorSubject(this.firstTurn());

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


}

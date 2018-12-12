import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
/* player turn will send and receive events using websockets */

  constructor(private http: HttpClient) { }


  selectBattleField(): Observable<string>{
    // emulate a server call that returns the battlefield url for the game
    return  Observable.create((observer:any)=>{ observer.next(this._bfUrl); observer.complete()})

  }
}

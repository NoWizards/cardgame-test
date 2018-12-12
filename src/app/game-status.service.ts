import { Injectable } from '@angular/core';

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
    player1LeftCards:[],
    player2Hp: 30,
    player2Hand:[],
    player2Graveyard:[],
    player2Field:[],
    player2LeftCards:[],
  }


  constructor() { }
}

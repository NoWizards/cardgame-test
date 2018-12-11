import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  /* server side game status */
  status ={
    playerTurn: 1,
    player1Hp: 30,
  }


  constructor() { }
}

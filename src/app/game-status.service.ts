import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  /* server side game status */
  status ={
    playerTurn: 1,
    player1hp: 30,
    
  }


  constructor() { }
}

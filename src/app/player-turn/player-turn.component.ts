import { Component, OnInit } from '@angular/core';
import { GameStatusService } from "../game-status.service";

@Component({
  selector: 'player-turn',
  templateUrl: './player-turn.component.html',
  styleUrls: ['./player-turn.component.scss']
})
export class PlayerTurnComponent implements OnInit {
  
  playerTurn$={
    msg: '',
    isP1: true
  }
  constructor(private _gameStatusService: GameStatusService) { }

  ngOnInit() {
    this._gameStatusService.gameTurns.subscribe(playerTurn => {this.playerTurn$ = playerTurn });
  }
  changeTurn(){
    if(this.playerTurn$.isP1)this._gameStatusService.endTurn();
  }

}

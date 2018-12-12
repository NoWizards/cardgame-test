import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { GameStatusService } from "../game-status.service";




@Component({
  selector: 'player-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  cardList={};
  total = 0;
  degrees = 0;
  array = [];
  constructor(private _deckService: DeckService, private _gameStatusService: GameStatusService ) { }

  ngOnInit() {
    this._gameStatusService.handSubject.subscribe(data =>{this.cardList = data; this.total=Object.keys(data).length; this.degrees= -7.5*(this.total-1); });

  }
  playThisCard(id){
    this._gameStatusService.playCard(id);
    console.log(`we will remove this card:  id:${id} -  as is being played by user`)
  }

  drawCard(){
    
    console.log(`will draw this card: ${this._deckService.drawACard()}`);
    
  }

}

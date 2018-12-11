import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';



@Component({
  selector: 'player-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  cardList=[];
  total = 0;
  degrees = 0;
  constructor(private _deckService: DeckService) { }

  ngOnInit() {
    this._deckService.getMyDeck().subscribe(data => {this.cardList = data; this.total= data.length; this.degrees= -7.5*(this.total-1) });
  }
  playThisCard(id){

    console.log(`we will remove this card:  ${id}`)
  }
  drawCard(){
    console.log(`will draw this card: ${this._deckService.drawACard()}`);
  }

}

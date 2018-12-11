import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'player-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardInfo;
  @Output() useCard  = new EventEmitter;

  constructor() { }

  ngOnInit() {

  }
  clickedCard(){
    this.useCard.emit(this.cardInfo.id);
  }

}

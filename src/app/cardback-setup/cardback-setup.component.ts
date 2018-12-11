import { Component, OnInit } from '@angular/core';
import { CardBackService } from '../card-back.service';

@Component({
  selector: 'cardback-setup',
  templateUrl: './cardback-setup.component.html',
  styleUrls: ['./cardback-setup.component.scss']
})
export class CardbackSetupComponent implements OnInit {
  allCardBacks = [];


  constructor(private _cardbackService: CardBackService) { }

  ngOnInit() {
    this._cardbackService.cardBackList().subscribe(data => {this.allCardBacks = data; console.log(data)});
    console.log(this.allCardBacks)
  }

}

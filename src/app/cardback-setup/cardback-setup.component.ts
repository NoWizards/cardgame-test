import { Component, OnInit } from '@angular/core';
import { CardBackService } from '../card-back.service';

@Component({
  selector: 'app-cardback-setup',
  templateUrl: './cardback-setup.component.html',
  styleUrls: ['./cardback-setup.component.scss']
})
export class CardbackSetupComponent implements OnInit {
  allCardbacks = [];


  constructor(private _cardbackService: CardBackService) { }

  ngOnInit() {
    this._cardbackService.cardBackList().subscribe(data => this.allCardbacks = data);
    console.log(this.allCardbacks)
  }

}

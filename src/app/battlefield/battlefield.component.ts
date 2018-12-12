import { Component, OnInit } from '@angular/core';
import { GameStatusService } from "../game-status.service";


@Component({
  selector: 'battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss']
})
export class BattlefieldComponent implements OnInit {

  bgUrl$ ='';

  constructor(private _gameStatusService: GameStatusService) { }

  ngOnInit() {
    this._gameStatusService.selectBattleField().subscribe(url => this.bgUrl$= url)
  }

}

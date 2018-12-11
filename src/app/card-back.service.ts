import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardBackService {
  /* to load and select the cardback style  */
  private _localBacks: string ="/assets/cardbacks/backlist.json";

  constructor() { }
}

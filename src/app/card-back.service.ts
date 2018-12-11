import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IBack } from "./cardback";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardBackService {
  /* to load and select the cardback style  */
  private _localBacks: string ="/assets/cardbacks/backlist.json";



  constructor(private http: HttpClient) { }

  
  cardBackList(): Observable<IBack[]>{
    return  this.http.get<IBack[]>(this._localBacks);

  }
}

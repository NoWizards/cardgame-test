import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { CardComponent } from './card/card.component';
import { DeckService } from './deck.service';
import { CardbackSetupComponent } from './cardback-setup/cardback-setup.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { PlayerTurnComponent } from './player-turn/player-turn.component';


@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    CardComponent,
    CardbackSetupComponent,
    BattlefieldComponent,
    PlayerTurnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }

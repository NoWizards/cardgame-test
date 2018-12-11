import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { CardComponent } from './card/card.component';
import { DeckService } from './deck.service';


@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    CardComponent
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
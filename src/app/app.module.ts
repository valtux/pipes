import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LOCALE_ID} from "@angular/core";

import { AppComponent } from './app.component';
import {CapitalizadoPipe} from "./pipes/capitalizado.pipe";
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasenaPipePipe } from './pipes/contrasena-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    ContrasenaPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

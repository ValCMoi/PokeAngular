import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './utils/api.service';
import { PokeCardComponent } from './poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent
  ],
  imports: [
    FormsModule, 
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    HttpClient,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

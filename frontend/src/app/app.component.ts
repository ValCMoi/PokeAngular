import { Component, OnInit } from '@angular/core';
import { Pokemon } from './class/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private pokemons: Pokemon[] | undefined;

  constructor(){}

  ngOnInit(): void {
      this.pokemons = []
  }
}

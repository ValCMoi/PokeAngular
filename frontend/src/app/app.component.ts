import { Component, OnInit } from '@angular/core';
import { Pokemon } from './class/pokemon';
import { ApiService } from './utils/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private pokemons: Pokemon[] | undefined;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.get('get/mockup').subscribe(data => {
      console.table(data)
      this.pokemons = data
    })
  }
}

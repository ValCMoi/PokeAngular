import { Component, Input } from '@angular/core';
import { Pokemon } from '../class/pokemon';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
  @Input() pokemon: Pokemon | undefined
}

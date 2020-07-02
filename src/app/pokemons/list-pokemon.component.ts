import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'list-pokemon',
	templateUrl: './app/pokemons/list-pokemon.component.html',


})
export class ListPokemonComponent {

	pokemons: Pokemon[]= null;

	constructor(
		private router: Router,
		private titleService: Title,
		private pokemonsService: PokemonsService,// on peut faire this.PokemonService
	 ) { }

	ngOnInit(){
		this.pokemonsService.getPokemons();
	}

	getPokemons(): void {
		this.titleService.setTitle('Liste des pokémons');
		this.pokemonsService.getPokemons()
			.subscribe(pokemons => this.pokemons = pokemons);
	}

	selectPokemon(pokemon: Pokemon){
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}

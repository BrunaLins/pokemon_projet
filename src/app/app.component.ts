import { Component } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import {POKEMONS} from './pokemons/mock-pokemons';

@Component({
	selector: 'pokemon-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent{
	/*pokemons: Pokemon[] = null;*/
}
    
/*	private pokemons: Pokemon[] ;
	private title: string="Pokémons"; 
	//age =18;
	//value="";
   //	private value: string= '';


	ngOnInit(){ 
		// initiail le propiéte 
		this.pokemons = POKEMONS;
	

	}
	/*nClick(){
		console.log("Clic");
	}
	onKey(value:string){
		this.value = 'bonjour'+ value;
	}
	
	selectPokemon (pokemon: Pokemon){
		console.log("vous avez selectionné"+ pokemon.name);
	}
 }*/

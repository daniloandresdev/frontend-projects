import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    API_POKEMON = 'https://pokeapi.co/api/v2/pokemon';

    private listPokemon! : any[];

    constructor(
        private _httpClient : HttpClient
    ) { }

    load () {
        return this._httpClient.get(`${this.API_POKEMON}?limit=151`);        
    }

    set pokemons(value) { 
        this.listPokemon = value;
    }

    get pokemons() {
        return this.listPokemon;
    }

    getPokemon (url: string) { 
        return this._httpClient.get(url);
    }

    getPokemonByName (name: string) { 
        return this._httpClient.get(`${this.API_POKEMON}/${name}`);
    }
    

}

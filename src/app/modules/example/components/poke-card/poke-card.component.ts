import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-poke-card',
    templateUrl: './poke-card.component.html',
    styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

    API_GITHUB_IMAGE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    
    constructor(
        private _route : Router,
        private _pokeService: PokemonService
    ) { }

    @Input() pokemon: any;

    ngOnInit(): void {
    
    }

    get Id () {
        return this.pokemon.url.split('/')[6];
    }

    goDetailPokemon(name : string) {
        this._route.navigate([`/pokemon/${name}`]);
    }

}

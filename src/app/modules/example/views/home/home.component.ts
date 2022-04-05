import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        public _pokemonService : PokemonService
    ) { }

    ngOnInit(): void {
        this._pokemonService.load().subscribe((data : any) => {
            this._pokemonService.pokemons = data.results;
        }, (error) => {
            console.log(error);
        });
        
    }

}

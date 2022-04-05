import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
    
    name! : string;

    pokemon : any;

    pokemonImg = '';
    pokemonType = [];


    constructor(
        private _activeRoute: ActivatedRoute,
        private _route : Router,
        public _pokeService: PokemonService
    ) { }

    ngOnInit(): void {
        this.getName();
        this.getPokemonByName();
    }

    getName = () => {
        this._activeRoute.params.subscribe(params => {
            this.name = params.name;
        });
    }
    getPokemonByName = () => {
        console.log(this.name);
        this._pokeService.getPokemonByName(this.name)
        .subscribe( (data:any) => {
            this.pokemon = data;
            console.log(this.pokemon);
            this.pokemonImg = this.pokemon.sprites.front_default;
            this.pokemonType    = data.types[0].type.name;
        }, (error:any) => {
            this.back();
        });
    }

    back(): void {
        this._route.navigate(['/pokemon']);
    }
    
}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './modules/example/components/poke-card/poke-card.component';
import { DetalleComponent } from './modules/example/views/detalle/detalle.component';
import { HomeComponent } from './modules/example/views/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DetalleComponent,
        PokeCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

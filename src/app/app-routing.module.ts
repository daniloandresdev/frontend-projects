import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './modules/example/views/detalle/detalle.component';
import { HomeComponent } from './modules/example/views/home/home.component';

const routes: Routes = [
    {
        path : 'pokemon',
        component : HomeComponent,
    },
    {
        path : 'pokemon/:name',
        component : DetalleComponent
    },

    {
        path : '**',
        redirectTo : 'pokemon'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { barNavegation } from './components/build/bar-navegation/bar-navegation';
import { LocalsComponent } from './views/pages/locals/locals';
import { Contac } from './views/pages/contac/contac';
import { Home } from './views/pages/home/home';
import { DetallesNegocio } from './views/pages/detalles-negocio/detalles-negocio';
import { Favorites } from './views/pages/favorites/favorites';
import { Offers } from './views/pages/offers/offers';

export const routes: Routes = [
    {
        path: '',
        component: barNavegation,
        children: [
            { path: '', component: Home },
            { path: 'home', component: Home },
            { path: 'locals', component: LocalsComponent },
            { path: 'favorites', component: Favorites },
            { path: 'offers', component: Offers },
            { path: 'contac', component: Contac },
        ]
    },

    { path: 'detalles-negocio/:id', component: DetallesNegocio },
    { path: '**', redirectTo: '' }
];
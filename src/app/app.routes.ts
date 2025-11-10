// app.routes.ts

import { Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Locals } from './vistas/locals/locals';
import { Contac } from './vistas/contac/contac';
import { Home } from './vistas/home/home';
import { Novedades } from './components/novedades/novedades';


export const routes: Routes = [

    { 
        path: '', component: NavMenuComponent,
        
        children: [
            
            { path: '', component: Home }, 
            { path: 'home', component: Home },
            { path: 'locals', component: Locals },
            { path: 'contac', component: Contac },
            { path: 'novedades', component: Novedades },
            { path: '**', redirectTo: 'home' } 
        ]
    }
];
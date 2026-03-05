// app.routes.ts

import { Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LocalsComponent } from './views/pages/locals/locals';
import { Contac } from './views/pages/contac/contac';
import { Home } from './views/pages/home/home';


export const routes: Routes = [

    { 
        path: '', component: NavMenuComponent,
        
        children: [
            
            { path: '', component: Home }, 
            { path: 'home', component: Home },
            { path: 'locals', component: LocalsComponent },
            { path: 'contac', component: Contac },
            { path: '**', redirectTo: 'home' } 
        ]
    }
];
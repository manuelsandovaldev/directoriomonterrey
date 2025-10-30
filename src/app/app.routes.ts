import { Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Locals } from './vistas/locals/locals';
import { Contac } from './vistas/contac/contac';
import { Home } from './vistas/home/home';


export const routes: Routes = [

    { path: '', component: NavMenuComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'locals', component: Locals },
            { path: 'contac', component: Contac },
        ]
     }

];

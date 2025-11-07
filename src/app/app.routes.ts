// app.routes.ts

import { Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Locals } from './vistas/locals/locals';
import { Contac } from './vistas/contac/contac';
import { Home } from './vistas/home/home';


export const routes: Routes = [

    { 
        // 1. Ruta Padre: Carga el NavMenuComponent en el <router-outlet /> principal
        path: '', 
        component: NavMenuComponent,
        
        children: [
            // 2. Ruta Hija por defecto: Carga el HomeComponent DIRECTAMENTE en la ruta vacía
            { path: '', component: Home }, 
            
            // 3. Rutas de contenido que se cargarán dentro del NavMenuComponent
            { path: 'home', component: Home },
            { path: 'locals', component: Locals },
            { path: 'contac', component: Contac },
            
            // 4. Manejo del comodín dentro del layout
            { path: '**', redirectTo: 'home' } 
        ]
    }
];
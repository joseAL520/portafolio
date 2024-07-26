import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path:'home',
        loadComponent: () => import('./briefcase/pages/principalPages/principalPages.component'),
    },

    {
        path:'presentation',
        loadComponent: () => import('./briefcase/pages/pages-presentation/pages-presentation.component'),
    },
    {
        path:'proyects',
        loadComponent: () => import('./briefcase/pages/pages-proyects/pages-proyects.component'),
    },
    
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
    
];

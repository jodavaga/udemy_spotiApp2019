import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent, pathMatch:'full' },
    { path: 'search', component: SearchComponent, pathMatch:'full' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash: true })

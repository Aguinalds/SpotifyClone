import { Routes } from "@angular/router";
import { AutheticaterGuard } from "./pages/guards/autheticater.guard";


export const AppRotas :  Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
        canLoad: [AutheticaterGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
    }
]
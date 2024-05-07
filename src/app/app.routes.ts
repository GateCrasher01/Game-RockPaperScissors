import { Routes } from '@angular/router';
import { GameplayComponent } from './gameplay/gameplay.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
{ path: '', redirectTo: 'register', pathMatch: 'full' },
{path: 'home', component: HomeScreenComponent},
{path: 'gameplay', component: GameplayComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{path: '**', redirectTo: 'home' },
];

import { Routes } from '@angular/router';
import {Home} from './components/home/home'
import {Books} from './components/books/books'
import {Resources} from './components/resources/resources'
import{Admin} from './components/admin/admin'
import { Header } from './components/header/header';
import{Login} from './components/login/login'

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'home',component:Home},
    {path:'books',component:Books},
    {path:'resources',component:Resources},
    {path:'admin',component:Admin}

];

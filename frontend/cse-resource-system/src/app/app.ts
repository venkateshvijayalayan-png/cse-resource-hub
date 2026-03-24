import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header'
import {Home} from './components/home/home'
import {Books} from './components/books/books'
import {Resources} from './components/resources/resources'
import{Admin} from './components/admin/admin'
import{Login} from './components/login/login'

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Header,Home,Books,Resources,Admin,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cse-resource-system');
}

import { Footer } from './footer/footer';
import { Testbootstrap } from './testbootstrap/testbootstrap';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firstcomp } from './firstcomp/firstcomp';
import { gallary } from './gallary/gallary';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Firstcomp,gallary,Navbar,Testbootstrap,Home,About,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}

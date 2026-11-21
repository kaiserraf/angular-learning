import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { Atributos } from './components/atributos/atributos';

@Component({
  imports: [RouterOutlet, Card, Atributos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Aula04');
  isAliveCard: boolean = true
}

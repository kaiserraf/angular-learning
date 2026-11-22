import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaModule } from './modules/lista/lista-module';

@Component({
  imports: [RouterOutlet, ListaModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Aula05');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalizeTitles } from './components/personalize-titles/personalize-titles';
import { CheckSample } from './components/check-sample/check-sample';

@Component({
  imports: [RouterOutlet, PersonalizeTitles, CheckSample],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Aula03');
  isAliveCheckSample: boolean = true;

  disposeCheckSample(): void{
    this.isAliveCheckSample = false;
  }
}

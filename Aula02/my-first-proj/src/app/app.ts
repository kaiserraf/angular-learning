import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buttons } from './components/buttons/buttons';
import { EntryData } from './components/entry-data/entry-data';
import { CreateUser } from './components/create-user/create-user';

@Component({
  imports: [RouterOutlet, Buttons, EntryData, CreateUser],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-proj');
  buttonLabel: string = "TOPES";
  buttonSecond: string = "WOWOWOW"
}

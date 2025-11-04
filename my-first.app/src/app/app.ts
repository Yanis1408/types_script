import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterListComponent } from './counter/counter';
import { Parent } from './parent/parent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CounterListComponent,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first.app');
}


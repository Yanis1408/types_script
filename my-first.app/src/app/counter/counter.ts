import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-list', // Balise HTML pour utiliser le composant  
  imports:[], 
  templateUrl: './counter.html',  
  styleUrls: ['./counter.css']
})

export class CounterListComponent {
  count = signal(0); // Signal pour stocker l’état  
  items = signal([
    { id: 1, name: "Angular" },
    { id: 2, name: "Signals" },
  ]);
  
  increment(): void {
    this.count.update(c => c + 1);  
  }
}
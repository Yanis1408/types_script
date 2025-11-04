import { Component,input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css'
})
export class Enfant {

img = input.required<string>();

}

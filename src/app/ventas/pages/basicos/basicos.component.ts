import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent   {

  nombreLower: string = 'manuel';
  nombreUpper: string = 'Manuel';
  nombreTitle: string = 'mAnuEl camACho';

  fecha: Date = new Date(); //dia de hoy

  constructor() { }



}

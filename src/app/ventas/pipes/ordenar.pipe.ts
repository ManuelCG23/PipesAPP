import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(hero: Heroe[], ordenarPor: string = 'nombre'): Heroe[] {

    switch(ordenarPor){
      case 'nombre': return hero.sort((a,b) => (a.nombre > b.nombre ) ? 1 : -1);
        break;

      case 'vuela': return hero.sort((a,b) => (a.vuela > b.vuela ) ? -1 : 1);
        break;

      case 'color': return hero.sort((a,b) => (a.color > b.color ) ? -1 : 1);
        break;

      default:
        return hero;
    }

  }

}

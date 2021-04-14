import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  //Mayusculas Pipe

  enMayusculas: boolean = true;

  cambioCapitalizacion(){
    this.enMayusculas=!this.enMayusculas;
  }

  //para la tabla

  heroes :  Heroe[] = [
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Capitán América',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Viuda negra',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Avispa',
      vuela: true,
      color: Color.amarillo
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Bruja Escarlata',
      vuela: true ,
      color: Color.rojo
    },
  ]

  //Para los filtros

  filtros : string = "";

  posiciionarFiltro(valor:string){
    this.filtros=valor;
  }




}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent   {
  //i18nSelect
  nombre: string = 'Manuel';
  genero: string = 'Masculino';

  palabras = {
    'Masculino': 'verlo',
    'Femenino': 'verla'
  }

  cambiarCliente(){

    if(this.genero==="Masculino"){
      this.nombre= 'Marta';
      this.genero= 'Femenino';
    }else{
      this.nombre= 'Manuel';
      this.genero= 'Masculino';
    }
  }

  //i18nPlural

  clientes: string[] = ['Marta', 'Pedro', 'Alfonso', 'Manuel', 'Ana'];
  clientesMapas ={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre:'Manuel',
    edad: 21,
    direccion: 'Huelva, España'
    
  }

  //Json pipe

  heroes = [
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Capitana Marvel',
      vuela: true
    },
    {
      nombre: 'Iron man',
      vuela: true
    }
  ]

  //Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('Fin promesa')
    }, 4000)
  })





}

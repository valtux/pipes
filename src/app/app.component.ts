import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "jinko";
  nombre2 = "jinKo bilBa";
  arreglo =[1,2,3,4,5,6,7,8,9,10];
  pi =  Math.PI;
  a = 0.234;
  salario= 1234.5;
  heroe = {
    nombre : "logan",
    clave : "wolverine",
    edad : 150,
    direccion : {
      calle:"primera",
      casa:"19"
    }
  }
  valoDeLaPromesa = new Promise( (resolve, reject) => {
    setTimeout( ()=>resolve('llego la data'), 3500);
  })

  fecha = new Date();
}

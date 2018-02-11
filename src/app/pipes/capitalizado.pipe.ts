import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  // transform(value: string, ...args: any[]):string {
  // transform(value: string, arg1,arg2, arg3):string {
  // transform(value: string, args: any[] ): string {

  // console.log(value);
  // // console.log(arg1);
  // // console.log(arg2);
  // // console.log(arg3);
  // console.log(args);


//   return "hola mundo" ;
// }

// capitalizacion
  // transform(value: string):string {
  //
  //   value = value.toLowerCase();
  //   let nombres = value.split(" ");
  //   for (let i in nombres){
  //     nombres[1]= nombres[i][0].toLowerCase() + nombres[i].substr(1);
  //
  //
  //   }
  //   return nombres.join(" ") ;
  // }

// capitalizacion con parametros
  transform(value: string, todas: boolean = true):string {

    value = value.toLowerCase();
    let nombres = value.split(" ");
    if (todas){

      for (let i in nombres){
        nombres[1]= nombres[i][0].toLowerCase() + nombres[i].substr(1);
      }
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(" ") ;
  }
}

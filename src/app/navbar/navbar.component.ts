import { Component, OnInit, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

interface Persona {
  nombre: string;
  edad: number;
}


const personas: Persona[] = [
  {
    nombre: "Agustin",
    edad: 4
  },
  {
    nombre: "Juan",
    edad: 40
  },
  {
    nombre: "Mauricio",
    edad: 10
  },
  {
    nombre: "Mario alias gorreado",
    edad: 22
  }
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent  {
  numero:number =0;
  lista:Persona[]=[];

  constructor(){
    this.numero = 0;
    this.lista = personas
  }
  
  reemplazarEdad(nombre:string, edad:number):void {
    const listaPersonas = this.lista
    const reemplazarEdad = listaPersonas.map(
      (persona) => persona.nombre === nombre ? ({...persona, edad: edad}) : persona
    )

    this.lista = reemplazarEdad
  }

  agregarUnAnioDeEdad(nombre:string, edad: number):void{
    this.reemplazarEdad(nombre, edad+1)
  }

  quitarUnAnioDeEdad(nombre:string, edad: number):void{
    this.reemplazarEdad(nombre, edad-1)
  }

  numero1():void{
    this.numero+=1
  }
  numero2():void{
    this.numero-=1
  }    
  

}




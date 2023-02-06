import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vladimir Aguacunchix';

  tarjetas:any=[
    {
      titulo:'Reportes Intranet',
      tecnologias:['Angular','Spring','Oracle'],
      imagen:'/assets/intranet2.jpeg',
      id:0
    },
    {
      titulo:'Sistema de gestión ARCERNNR',
      tecnologias:['Angular','Java','Oracle'],
      imagen:'/assets/sisdat4.jpeg',
      id:1
    },
    {
      titulo:'Fortunella App',
      tecnologias:['React','Firebase'],
      imagen:'/assets/fortunella6.webp',
      id:2
    }
  ]

  constructor (){

  }

  

}

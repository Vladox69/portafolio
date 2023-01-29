import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carrusel-component',
  templateUrl: './carrusel-component.component.html',
  styleUrls: ['./carrusel-component.component.css']
})
export class CarruselComponentComponent implements OnInit {
  @Input() posicion:any;


  proyectos:any=[
    {
    titulo:'Reportes Intranet',
    subtitulo:'Solución a reportes de intranet en EEASA',
    imagenes:[''],
    texto:`Reportes Intranet es un sistema que ayuda a la generación de reportes de los
    procesos de compras públicas de la Empresa Eléctrica Ambato Regional Centro
    Norte S. A. EEASA por medio de gráficas y tablas para el análisis que
    facilitan la comprensión de todos los datos en comprendidos entre dos
    fechas, para ser exportados en formato Excel y Pdf.`,
    link:'https://github.com/Vladox69/ComprasPublicas/tree/develop'
    },
    {
      titulo:'Sistema ARCERNNR',
      subtitulo:'Solución para la gestión de ARCERNNR en EEASA',
      imagenes:['',''],
      texto:`Sistema ARCERNNR ayuda a la gestión de los alimentadores de la Empresa Eléctrica Ambato Regional 
      Centro Norte S. A. EEASA para la generación de reportes sobre causas de fallo de los mismos
      que son presentados para (a un empresa no se cual) y por medio de gráficas se puede realizar el análisis
      de variación de voltajes`,
      link:'https://github.com/fer51974/indices'
    },
    {
      titulo:'Fortunella',
      subtitulo:'Portal para ventas web',
      imagenes:['/assets/fortunella1.png','/assets/fortunella2.png','/assets/fortunella3.png','/assets/fortunella4.png','/assets/fortunella5.png'],
      texto:`Fortunella app web es una aplicación que ayuda al emprendimiento con el mismo nombre a automatizar
      las ventas, con el fin de llegar a un mercado diferente`,
      link:'https://github.com/Vladox69/Fortunella'
    }
]

  constructor() {
  }

  ngOnInit(): void {
  }

}

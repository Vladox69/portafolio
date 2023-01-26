import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carrusel-component',
  templateUrl: './carrusel-component.component.html',
  styleUrls: ['./carrusel-component.component.css']
})
export class CarruselComponentComponent implements OnInit {
  @Input() tarjeta:any;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.tarjeta);
  }

}

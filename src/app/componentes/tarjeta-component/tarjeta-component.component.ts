import { Component, OnInit,Input  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponentComponent } from '../carrusel-component/carrusel-component.component';

@Component({
  selector: 'app-tarjeta-component',
  templateUrl: './tarjeta-component.component.html',
  styleUrls: ['./tarjeta-component.component.css']
})
export class TarjetaComponentComponent implements OnInit {

  @Input() dato:any;
  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }

  openModalCarrusel(posicion:any) {
    const activeModal= this.modalService.open(CarruselComponentComponent, {
      centered: true,
      size: 'lg',
      backdrop: true,
      keyboard: false,
    });
    activeModal.componentInstance.posicion = posicion;
  }

}

import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponentComponent } from './componentes/carrusel-component/carrusel-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio2';
  constructor (private modalService: NgbModal){

  }

  openModalCarrusel(tarjeta:any) {
    const activeModal= this.modalService.open(CarruselComponentComponent, {
      centered: true,
      size: 'lg',
      backdrop: true,
      keyboard: false,
    });
    activeModal.componentInstance.tarjeta = tarjeta;
  }

}

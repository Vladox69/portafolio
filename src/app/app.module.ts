import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponentComponent } from './componentes/carrusel-component/carrusel-component.component';
import { TarjetaComponentComponent } from './componentes/tarjeta-component/tarjeta-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponentComponent,
    TarjetaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

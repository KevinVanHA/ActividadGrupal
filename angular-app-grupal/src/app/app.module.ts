import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { ContactosComponent } from './contactos/contactos.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

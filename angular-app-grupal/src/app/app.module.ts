import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [{
  path: '',
  component: InicioComponent
},
{
  path: 'nosotros',
  component: NosotrosComponent
},
{
  path: 'servicios',
  component: ServiciosComponent
},
{
  path: 'blog',
  component: BlogComponent
},
{
  path: 'contactos',
  component: ContactosComponent
},
{
  path: '**',
  component: PagenofoundComponent
}

]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent,
    ContactosComponent,
    PagenofoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

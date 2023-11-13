import { Component, OnInit } from '@angular/core';
//import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogPosts = [{
    title: 'ESTO ES LO QUE DEBEMOS COMER PARA EL CUIDADO DE LOS DIENTES',
    content: 'La ciencia es determinante cuando plantea que la alimentación es un factor fundamental para nuestra salud, lo que también influye en el estado de nuestra salud bucodental. Aquí existen  nutrientes que permiten la participación en la formación y salud de los dientes y las encías. Entre los que se encuentran el calcio, el fósforo, el flúor',
    id: 1
  },
  {
    title: 'HÁBITOS QUE MALTRATAN TUS DIENTES',
    content: 'En el capítulo I hablamos de tres puntos y hábitos que debemos parar para que nuestros dientes no se dañen, no sufran en el transcurso de nuestra existencia. Ahora tocaremos tres puntos más que el 80% de las personas comunes y corrientes desconocen. 1.-  Apretar y rechinar los dientes La mayor cantidad de personas aprieta…',
    id: 2
  },
  {
    title: 'Consejos para evitar la caries en los niños.',
    content: 'Evitar la caries en los niños parece una tarea cada vez más complicada, sin embargo hay que estar consciente que desde el primer momento es responsabilidad nuestra como padres. Los consejos que te vamos a decir no nos sonarán extraños, asi que manos a la obra para evitar los siguientes errores mas frecuentes que tienes',
    id: 3
  }]

  // Asumiendo una estructura de datos básica para las publicaciones

  // constructor(private blogService: BlogService) {}

  // ngOnInit() {
  //   this.blogService.getPosts().subscribe((posts) => {
  //     this.blogPosts = posts;
  //   });
  // }


}

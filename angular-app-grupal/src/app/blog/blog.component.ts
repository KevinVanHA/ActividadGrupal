import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: any[]; // Asumiendo una estructura de datos básica para las publicaciones

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

interface Post {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  posts: Post[] = [];
  selectedId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Post[]>('http://localhost:3000/api/posts')
      .subscribe(data => this.posts = data);
  }

  toggle(id: number) {
    this.selectedId = this.selectedId === id ? null : id;
  }
}

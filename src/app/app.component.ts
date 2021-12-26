import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('http://localhost:8080/api/posts', postData).subscribe(response => {
      console.log(response)
    })
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true
    this.http.get<Post[]>('http://localhost:8080/api/posts')
      .subscribe(posts => {
        this.loadedPosts = posts
        this.isFetching = false
      })
  }
}

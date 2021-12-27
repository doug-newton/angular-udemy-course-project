import { Component, OnInit } from '@angular/core';
import { Post } from './post.model'
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false

  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(data: {title:string; content: string}) {
    this.postsService.createPost(data.title, data.content).subscribe(response => {
      this.fetchPosts()
    })
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(response => {
      this.fetchPosts()
    })
  }

  private fetchPosts() {
    this.isFetching = true
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts
      this.isFetching = false
    })
  }
}

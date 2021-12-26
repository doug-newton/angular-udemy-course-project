import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

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
    this.http.get('http://localhost:8080/api/posts')
      .pipe(map((data: []) => {
        return data.map(item=>{
          item['id'] = item['_id']
          delete item['_id']
          return item
        })
      }))
      .subscribe(posts => {
        console.log(posts)
      })
  }
}

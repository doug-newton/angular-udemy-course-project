import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(
        private http: HttpClient
    ){}

    createPost(title: string, content: string): Observable<any> {
        const postData: Post = {
            title, content
        }
        return this.http.post('http://localhost:8080/api/posts', postData)
    }

    fetchPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:8080/api/posts')
    }

    deletePosts(): Observable<any> {
        return this.http.delete<any>('http://localhost:8080/api/posts')
    }
}
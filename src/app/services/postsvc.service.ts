import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../domain/post';

@Injectable({
  providedIn: 'root'
})
export class PostsvcService {

  constructor(private http: HttpClient) {
     

   }


   getPost(postId: string):Observable<Post>{

    return this.http.get<Post>(`http://localhost:3000/posts/${postId}`);
   }


   getPosts():Observable<Post[]>{

    return this.http.get<Post[]>('http://localhost:3000/posts/');
   }

}

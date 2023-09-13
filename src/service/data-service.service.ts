import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private comment : BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  getPostData() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  getCommentsData(id: number) {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  setComments(id: number) {
    this.comment.next(id);
  }

  getComments(): Observable<any> {
    return this.comment.asObservable();
  }
}

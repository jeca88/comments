import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = "https://hacker-news.firebaseio.com/v0/";

  constructor(private http: HttpClient) { }

  getTopStoriesIds():Observable<number[]>{
    return this.http.get<number[]>(`${this.newsUrl}topstories.json?print=pretty`)
  }

  getItemsStories(id: number): Observable<any> {
    return this.http.get<any>(`${this.newsUrl}item/${id}.json?print=pretty`);
  }

 

}

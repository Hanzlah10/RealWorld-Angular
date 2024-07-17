import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleResponseInterface } from '../types/articleResponse.interface';
import { ArticleInterface } from '../types/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
  getArticle(slug:string):Observable<ArticleInterface>{
    const fullUrl =   `${environment.apiUrl}/articles/${slug}`
    return this.http.get<ArticleResponseInterface>(fullUrl).pipe(map((res) => res.article))
  }
}

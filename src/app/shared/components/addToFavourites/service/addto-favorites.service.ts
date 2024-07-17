import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleRequestInterface } from '../../articleForm/types/articleRequest.interface';
import { ArticleResponseInterface } from 'src/app/shared/types/articleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AddtoFavoritesService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.realworld.io/api';
  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .post<ArticleResponseInterface>(url, {})
      .pipe(map(this.getArticle));
  }
  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http.delete<ArticleResponseInterface>(url, {}).pipe(map(this.getArticle));
  }
  getUrl(slug: string) {
    return `${this.apiUrl}/articles/${slug}/favorite`;
  }
  getArticle(response:ArticleResponseInterface){
    console.log(response);
    
    return response.article
  }
}

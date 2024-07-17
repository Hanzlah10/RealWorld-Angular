import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleRequestInterface } from 'src/app/shared/components/articleForm/types/articleRequest.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleResponseInterface } from 'src/app/shared/types/articleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}
  createArticle(articleReq: ArticleRequestInterface): Observable<ArticleInterface> {
    console.log('Requesting to create article:', articleReq);
    const fullUrl = "https://api.realworld.io/api" + '/articles';
    return this.http.post<ArticleResponseInterface>(fullUrl,articleReq).pipe(map((response) => response.article))
  }
  
}

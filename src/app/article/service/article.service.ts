import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }
  deleteArticle(slug:string):Observable<{}>{
    console.log('Deltete Article',slug);
    
    const fullUrl =   `${environment.apiUrl}/articles/${slug}`
    return this.http.delete(fullUrl)
}
}
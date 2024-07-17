import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetStreamResponseInterface } from '../types/getStreamResponse';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private http:HttpClient) { }
  getStream(url:string):Observable<GetStreamResponseInterface>{
    const fullUrl = 'https://api.realworld.io/api'+url;
    return this.http.get<GetStreamResponseInterface>(fullUrl)
  }
}

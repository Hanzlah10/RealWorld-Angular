import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ArticleResponseInterface } from '../../types/articleResponse.interface';
import { Observable, map } from 'rxjs';
import { GetUserProfileResponseInterface } from 'src/app/userProfile/types/userProfileResponse.interface';
import { GetPopularTagResponse } from './types/GetPopularTagResponse.interface.';
import { PopularTagType } from '../../types/popularTag.type';

@Injectable({
  providedIn: 'root'
})
export class PopulartagsService {

  constructor(private http:HttpClient) { }
  getPopularTags():Observable<PopularTagType[]>{
    const fullUrl = environment.apiUrl+"/tags"
  return this.http.get<GetPopularTagResponse>(fullUrl).pipe(map((response) => 
  {
    
    return response.tags
  }))
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetUserProfileResponseInterface } from '../types/userProfileResponse.interface';
import { environment } from 'src/environments/environment.development';
import { UserProfileInterface } from '../types/userProfile.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}
  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const fullUrl = `${environment.apiUrl}/profiles/${slug}`;
    console.log(slug);
    
    return this.http
      .get<GetUserProfileResponseInterface>(fullUrl)
      .pipe(map((res) => res.profile));
  }
}

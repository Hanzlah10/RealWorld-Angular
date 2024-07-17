import { Route } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileService } from './service/user-profile.service';
import { provideState } from '@ngrx/store';
import { userProfileFeatureKey, userProfileReducer } from './store/reducers';
import * as userProfileEffects from './store/effects';
import { provideEffects } from '@ngrx/effects';

export const userProfileRoutes: Route[] = [
  {
    path: '',
    component: UserProfileComponent,
    providers: [
      UserProfileService,
      provideState(userProfileFeatureKey, userProfileReducer),provideEffects(userProfileEffects)
    ],
  },
];

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserProfileService } from '../service/user-profile.service';
import { userProfileActions } from './actions';
import { UserProfileInterface } from '../types/userProfile.interface';

export const getUserProfileEffects = createEffect(
  (actions$ = inject(Actions), userProfileService = inject(UserProfileService)) => {
    return actions$.pipe(
      ofType(userProfileActions.getUserProfile),
      switchMap(({ slug }) => {
        return userProfileService.getUserProfile(slug).pipe(
          map((userProfile: UserProfileInterface) => {
            return userProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(userProfileActions.getUserProfileFailure);
          })
        );
      })
    );
  },
  { functional: true }
);

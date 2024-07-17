import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { authActions } from './action';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators'; // Import operators from 'rxjs/operators'
import { of } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

import { Router } from '@angular/router';

export const getCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        const token = persistanceService.get('accessToken')
        if (!token) {
          return of(authActions.getCurrentUserFailure())
        }
        return authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.getCurrentUserSuccess({ currentUser });
          }),
          catchError(() => {
            return of(
              authActions.getCurrentUserFailure()
            );
          })
        );
      })
    );
  },
  { functional: true }
);
// 
export const registerEffects = createEffect(
  (
    actions$ = inject(Actions),
    registerService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return registerService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
export const redirectToHomePage = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  { functional: true, dispatch: false }
);
// LOGIN EFFECTS
export const loginEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.loginSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({
                errors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    );
  },
  { functional: true }
)

export const redirectAfterLoginEffect = createEffect((actions$ = inject(Actions), router = inject(Router)) => {
  return actions$.pipe(ofType(authActions.loginSuccess),
    tap(() => {
      router.navigateByUrl('/');
    }))
}, { functional: true, dispatch: false });

export const UpdateCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),

  ) => {
    return actions$.pipe(
      ofType(authActions.updateUser),
      switchMap(({ currentUserRequest }) => {

        return authService.updateCurrentUser(currentUserRequest).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.updateUserSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.updateUserFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
export const LogoutEffects = createEffect(
  (actions$ = inject(Actions),
    router = inject(Router),
    persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(authActions.logout),
      take(1),
      tap(() => {
        console.log("Effect is runnning");

        router.navigateByUrl('/login')
        return (persistanceService.set("accessToken", " "))
      }))
  }, { functional: true }
)
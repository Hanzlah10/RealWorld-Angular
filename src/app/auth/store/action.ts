import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerrequest.interface';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserRequestInterface } from 'src/app/shared/components/articleForm/types/currentUser.interface';
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Failure': props<{ errors: BackendErrorsInterface }>(),
    Login: props<{ request: LoginRequestInterface }>(),
    'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    'Login Failure': props<{ errors: BackendErrorsInterface }>(),
    'Get Current User': emptyProps(),
    'Get Current User Success': props<{ currentUser: CurrentUserInterface }>(),
    'Get Current User Failure': emptyProps(),
    'Update  User': props<{
      currentUserRequest: CurrentUserRequestInterface;
    }>(),
    'Update  User Success': props<{
      currentUser: CurrentUserInterface;
    }>(),
    'Update  User Failure': props<{ errors: BackendErrorsInterface }>(),
    Logout: emptyProps(),
  },
});

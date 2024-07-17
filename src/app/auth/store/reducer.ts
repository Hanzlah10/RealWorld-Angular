import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './action';
import { routerNavigationAction } from '@ngrx/router-store';
const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null,
};
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(authActions.getCurrentUser, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFailure, (state) => ({
      ...state,
      isLoading: false,
      currentUser: null,
    })),
    // Cleaning every time the state so that  validation error is not there while going from sign Up to sign in example we have a error of validations so in the store the validation is updated
    on(routerNavigationAction, (state) => ({
      ...state,

      validationErrors: null,
    })),
    on(authActions.updateUserSuccess, (state, action) => ({
      ...state,
      currentUser: action.currentUser,
    })),
    on(authActions.updateUserFailure, (state, actions) => ({
      ...state,
      validationErrors: actions.errors,
    })),
    // Cleaning every time the state so that  validation error is not there while going from sign Up to sign in example we have a error of validations so in the store the validation is updated
    on(routerNavigationAction, (state) => ({
      ...state,
      validationErrors: null,
    })),
    on(authActions.logout, (state) => ({
      ...state,
      ...initialState,
      currentUser: null,
    }))
  ),
});
export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;

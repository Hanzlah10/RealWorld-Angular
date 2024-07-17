import { createFeature, createReducer, on } from '@ngrx/store';

import { routerNavigationAction } from '@ngrx/router-store';
import { CreatearticleStateInterface } from '../types/createArticleState.interface';
import { createArticleActions } from './action';

const initialState: CreatearticleStateInterface = {
  isSubmitting:false,
  validationErrors:null
};

const createArticleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initialState,
    on(createArticleActions.getCreateArticle, (state) => ({
      ...state,
      isSubmitting:true
    })),
    on(createArticleActions.getCreateArticleSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.article,
    })),
    on(createArticleActions.getCreateArticleFailure, (state,action) => ({
      ...state,
      isLoading: false,
      validationErrors:action.errors
    }))
  ),
});
export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
selectIsSubmitting,
selectValidationErrors,
selectCreateArticleState
}= createArticleFeature;

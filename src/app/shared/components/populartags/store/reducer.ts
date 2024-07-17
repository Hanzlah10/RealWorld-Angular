import { createFeature, createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';
import { PopularTagsActions } from './action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};
const popularFeature = createFeature({
  name: 'popular tags',
  reducer: createReducer(
    initialState,
    on(PopularTagsActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(PopularTagsActions.getPopularTagsSuccess, (state,actions) => ({
      ...state,
      isLoading: false,
      data:actions.popularTags
    })),
    on(PopularTagsActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigationAction, (state) => ({
      ...state,
    })),
  ),
});
export const {name:PopularTagsFeatureKey,
reducer:popularTagsReducer,
selectIsLoading,
selectError,
selectData} =popularFeature
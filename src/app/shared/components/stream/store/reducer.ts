import { createFeature, createReducer, on } from '@ngrx/store';
import { StreamStateInterface } from '../types/streamState.interface';
import { streamActions } from './action';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: StreamStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};
const streamFeature = createFeature({
  name: 'stream',
  reducer: createReducer(
    initialState,
    on(streamActions.getStream, (state) => ({ ...state, isLoading: true })),
    on(streamActions.getStreamSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.stream,
    })),
    on(streamActions.getStreamFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});
export const {
  name: streamFeatureKey,
  reducer: streamReducer,
  selectIsLoading,
  selectError,
  selectData: selectStreamData,
} = streamFeature;

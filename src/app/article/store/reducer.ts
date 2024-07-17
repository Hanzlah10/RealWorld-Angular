import { createFeature, createReducer, on } from "@ngrx/store";
import { initialArticleState,  } from "../types/article.state";
import { articleActions } from "./action";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: initialArticleState = {
    isLoading: false,
    error: null,
    data: null,
  };
  
  const articleFeature = createFeature({
    name: 'article',
    reducer: createReducer(
      initialState,
      on(articleActions.getArticle, (state) => ({
        ...state,
        isLoading: true,
      })),
      on(articleActions.getArticleSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.article,
      })),
      on(articleActions.getArticleFailure, (state) => ({
        ...state,
        isLoading: false,
      })),
      on(articleActions.getArticle, (state) => ({
        ...state,
        isLoading: true,
      })),
      on(articleActions.getArticleSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.article,
      })),
      on(articleActions.getArticleFailure, (state) => ({
        ...state,
        isLoading: false,
      })),
      on(routerNavigatedAction, () => initialState)
    ),
  });
  export const {
    name: articleFeatureKey,
    reducer: articleReducer,
    selectIsLoading,
    selectError,
    selectData: selectArticleData,
  }= articleFeature;
  
import { Route } from '@angular/router';
import { EditArticlesComponent } from './editArticles.component';
import { EditArticleService } from '../../services/editArticles.service';
import { getArticleEffects,redirectAfterUpdateEffect,updateArticleEffects } from '../../store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  editArticleFeatureKey,
  editArticleReducer,
} from '../../store/reducer';

export const routes: Route[] = [
  {
    path: '',
    component: EditArticlesComponent,
    providers: [
      EditArticleService,
      provideEffects(getArticleEffects,updateArticleEffects,{redirectAfterUpdateEffect}),
      provideState(editArticleFeatureKey, editArticleReducer),
    ],
  },
];

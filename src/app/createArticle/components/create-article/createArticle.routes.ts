import { Route } from '@angular/router';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleService } from '../../services/createArticle.service';
import { createArticleEffects, redirectAfterCreateEffect } from '../../store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  createArticleFeatureKey,
  createArticleReducer,
} from '../../store/reducer';
import { DeleteArticleEffects } from 'src/app/article/store/effects';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      CreateArticleService,
      provideEffects(createArticleEffects,{redirectAfterCreateEffect}),
      provideState(createArticleFeatureKey, createArticleReducer),
    ],
  },
];

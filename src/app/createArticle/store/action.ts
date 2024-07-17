import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleRequestInterface } from 'src/app/shared/components/articleForm/types/articleRequest.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';


export const createArticleActions = createActionGroup({
  source: 'createArticle',
  events: {
    'Get Create article': props<{request:ArticleRequestInterface}>(),

    'Get Create article success': props<{ article:ArticleInterface }>(),
    'Get Create article failure': props<{errors:BackendErrorsInterface}>(),
  },
});

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { editArticleActions } from './action';
import {

  EditArticleService,
} from '../services/editArticles.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
@Injectable()
export class getArticleEffects {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleActions.getArticle),
      switchMap(({ slug }) =>
        this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return editArticleActions.getArticleSuccess({ article });
          }),
          catchError(() => of(editArticleActions.getArticleFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService // article service shared
  ) {}
}
@Injectable()
export class updateArticleEffects {
  updateArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleActions.updateArticle),
      switchMap(({ request, slug }) =>
        this.editArticleService.updateArticle(slug, request).pipe(
          map((article: ArticleInterface) => {
            return editArticleActions.updateArticleSuccess({ article });
          }),
          catchError((errorsResponse: HttpErrorResponse) =>
            of(
              editArticleActions.updateArticleFailure({
                errors: errorsResponse.error.errors,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService
  ) {}
}
export const redirectAfterUpdateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(editArticleActions.updateArticleSuccess),
      tap(({ article }) => {
        router.navigate(['/articles', article.slug]);
      })
    );
  },
  { functional: true, dispatch: false }
);

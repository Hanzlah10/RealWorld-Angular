import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { createArticleActions } from './action';
import { CreateArticleService } from '../services/createArticle.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class createArticleEffects {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleActions.getCreateArticle),
      switchMap(({ request }) =>
        this.createArticleService.createArticle(request).pipe(
          map((article: ArticleInterface) => {
            return createArticleActions.getCreateArticleSuccess({ article });
          }),
          catchError((errorsResponse: HttpErrorResponse) =>
            of(
              createArticleActions.getCreateArticleFailure({
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
    private createArticleService: CreateArticleService
  ) {}
}
export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createArticleActions.getCreateArticleSuccess),
      tap(({article}) => {
        router.navigate(['/articles',article.slug]);
      })
    );
  },
  { functional: true, dispatch: false }
);

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleService as DeleteArticleService } from '../service/article.service';
import { articleActions } from './action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { Router } from '@angular/router';

@Injectable()
export class ArticleEffects {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap(({ slug }) =>
        this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return articleActions.getArticleSuccess({ article });
          }),
          catchError(() => of(articleActions.getArticleFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService // article service shared
  ) {}
}

@Injectable()
export class DeleteArticleEffects {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(articleActions.deleteArticle), // Use the correct action type
      switchMap(({ slug }) =>
       {  
        console.log(slug);
        
        return this.deletearticleService.deleteArticle(slug).pipe(
          map(() => articleActions.deleteArticleSuccess()),
          catchError(() => of(articleActions.deleteArticleFailure()))
        )}
      )
    )
  );

  constructor(
    private actions$: Actions,
    private deletearticleService: DeleteArticleService
  ) {}
}
export const redirectAfterDeleteEffect = createEffect((actions$ = inject(Actions),router = inject(Router)) =>{
  return actions$.pipe(ofType(articleActions.deleteArticleSuccess),
  tap(() => {
    router.navigateByUrl('/')
  }))
},{functional:true,dispatch:false})

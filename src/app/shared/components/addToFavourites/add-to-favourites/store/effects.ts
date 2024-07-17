import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {ArticleInterface} from 'src/app/shared/types/article.interface'


import { AddtoFavoritesService } from '../../service/addto-favorites.service'
import { favouritesAction } from './action'

export const addToFavoritesEffect = createEffect(
  (
    actions$ = inject(Actions),
    addToFavoritesService = inject(AddtoFavoritesService)
  ) => {
    return actions$.pipe(
      ofType(favouritesAction.favorites),
      switchMap(({isFavourited, slug}) => {
        const article$ = isFavourited
          ? addToFavoritesService.removeFromFavorites(slug)
          : addToFavoritesService.addToFavorites(slug)
        return article$.pipe(
          map((article: ArticleInterface) => {
            return favouritesAction.favoritesSuccess({article})
          }),
          catchError(() => {
            return of(favouritesAction.favoritesFailure())
          })
        )
      })
    )
  },
  {functional: true}
)

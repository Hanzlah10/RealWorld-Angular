import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PopulartagsService } from "../populartags.service";
import { PopularTagsActions } from "./action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { PopularTagType } from "src/app/shared/types/popularTag.type";

export const getPopularTagsEffect = createEffect(
    (actions$ = inject(Actions), popularService = inject(PopulartagsService)) => {
      return actions$.pipe(
        ofType(PopularTagsActions.getPopularTags),
        switchMap(() => {
          return popularService.getPopularTags().pipe(
            map((popularTags: PopularTagType[]) => {
                
              return PopularTagsActions.getPopularTagsSuccess({ popularTags });
            }),
            catchError(() => {
              return of(PopularTagsActions.getPopularTagsFailure());
            })
          );
        })
      );
    },{functional:true}
  );
  
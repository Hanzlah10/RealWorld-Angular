import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StreamService } from "../services/stream.service";
import { inject } from "@angular/core";
import { streamActions } from "./action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetStreamResponseInterface } from "../types/getStreamResponse";

export const getStreamEffect= createEffect(
    (
      actions$ = inject(Actions),
      streamService = inject(StreamService),
    ) => {
      return actions$.pipe(
        ofType(streamActions.getStream),
        switchMap(({url}) => {
         
          return streamService.getStream(url).pipe(
            map((stream:GetStreamResponseInterface) => {
              return streamActions.getStreamSuccess({ stream });
            }),
            catchError(() => {
              return of(
                streamActions.getStreamFailure()
              );
            })
          );
        })
      );
    },
    { functional: true }
  );
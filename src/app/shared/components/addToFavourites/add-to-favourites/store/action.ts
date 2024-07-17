import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleResponseInterface } from "src/app/shared/types/articleResponse.interface";

export const favouritesAction = createActionGroup({
    source: 'favourites',
    events: {
        "Favorites":props<{isFavourited:boolean,slug:string}>(),
        "Favorites Success":props<{article:ArticleInterface}>(),
        "Favorites Failure":emptyProps()

    }
})
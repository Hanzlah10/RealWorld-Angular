import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { PopularTagType } from "src/app/shared/types/popularTag.type";

export const PopularTagsActions = createActionGroup({
    source:'popular tags',
    events:{
        'Get Popular Tags':emptyProps(),
        'Get Popular Tags success':props<{popularTags:PopularTagType[]}>(),
        'Get Popular Tags failure':emptyProps(),
    }
})
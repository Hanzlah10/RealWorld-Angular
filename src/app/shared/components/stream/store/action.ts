import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GetStreamResponseInterface } from "../types/getStreamResponse";
export const streamActions = createActionGroup({
    source:'stream',
    events:{
        "Get stream":props<{url:string}>(),
        
        "Get stream success":props<{stream:GetStreamResponseInterface}>(),
        "Get stream failure":emptyProps(),

    }
})
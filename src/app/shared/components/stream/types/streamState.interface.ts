import { GetStreamResponseInterface } from "./getStreamResponse"

export interface StreamStateInterface{
    isLoading:boolean,
    error:string|null
    data:GetStreamResponseInterface|null

}
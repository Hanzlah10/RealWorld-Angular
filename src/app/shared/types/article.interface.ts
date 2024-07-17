import { ProfileInterface } from "../components/stream/types/profile.interface"
import { PopularTagType } from "./popularTag.type"

export interface ArticleInterface{
    body:string
    createdAt:string
    description:string
    favorited:boolean
    slug:string
    tagList:PopularTagType[]
    title:string
    updatedAt:string
    author:ProfileInterface,
    favoritesCount:number
}
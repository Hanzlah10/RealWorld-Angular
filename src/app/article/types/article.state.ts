import { ArticleInterface } from "src/app/shared/types/article.interface"
import { ArticleResponseInterface } from "src/app/shared/types/articleResponse.interface"

export interface initialArticleState{
    isLoading:boolean
    error:string|null
    data: ArticleInterface|null
}
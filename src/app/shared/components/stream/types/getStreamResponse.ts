import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface GetStreamResponseInterface{
    articles:ArticleInterface[]
    articlesCount:number;
}
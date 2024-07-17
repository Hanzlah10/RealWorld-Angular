import { Route } from "@angular/router";
import { ArticleComponent } from "./article/article.component";
import { provideEffects } from "@ngrx/effects";
import  {ArticleEffects, DeleteArticleEffects, redirectAfterDeleteEffect} from './store/effects'
import { provideState } from "@ngrx/store";
import { articleFeatureKey, articleReducer } from "./store/reducer";
import { ArticleService as DeleteArticleService } from './service/article.service';
export const articleRoutes:Route[]=[
    {
        path:'',
        component:ArticleComponent,
        providers:[
            DeleteArticleService,
            provideEffects(ArticleEffects,DeleteArticleEffects,{redirectAfterDeleteEffect}),
            provideState(articleFeatureKey,articleReducer),

        ],
    }
]
// providers: [
//     CreateArticleService,
//     provideEffects(createArticleEffects),
//     provideState(createArticleFeatureKey, createArticleReducer),
//   ],
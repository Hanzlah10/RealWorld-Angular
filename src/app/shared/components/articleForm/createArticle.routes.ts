import { Route } from "@angular/router";
import { ArticleFormComponent } from "./articleForm.component";
import {provideEffects} from '@ngrx/effects'
import {provideState} from '@ngrx/store'
export const routes:Route[]=[
    {
        path:'',
        component:ArticleFormComponent
     
    }
]
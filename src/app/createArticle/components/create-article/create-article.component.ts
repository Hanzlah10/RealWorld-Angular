import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { ArticleFormComponent } from 'src/app/shared/components/articleForm/articleForm.component';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleForm/types/articleFormValues.interface';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { ArticleRequestInterface } from 'src/app/shared/components/articleForm/types/articleRequest.interface';
import { createArticleActions } from '../../store/action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-create-article',
  standalone: true,
  imports: [ArticleFormComponent,CommonModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
initialValues ={
  title:'',
  description:'',
  body:'',
  tagList:[]
}
data$ =combineLatest({
  isSubmitting:this.store.select(selectIsSubmitting) ,
  backendErrors:this.store.select(selectValidationErrors) 
})
constructor(private store:Store){}
onSubmit(articleFormValues:ArticleFormValuesInterface):void{
  console.log("onSubmit in create article",articleFormValues);
  const request:ArticleRequestInterface ={
    article:articleFormValues
  }
  this.store.dispatch(createArticleActions.getCreateArticle({request}))
}
}

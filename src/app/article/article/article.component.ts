import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { ErrorMessage } from 'src/app/shared/components/messages/errormessages.component';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { ArticleService } from 'src/app/shared/services/article.service';
import { articleActions } from '../store/action';
import { combineLatest, filter, map } from 'rxjs';
import {
  selectArticleData,
  selectError,
  selectIsLoading,
} from '../store/reducer';
import { selectCurrentUser } from 'src/app/auth/store/reducer';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-article',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LoadingComponent,
    TagListComponent,
    ErrorMessage,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  articlesData: string = '';
  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({ currentUser, article }) => {
      if (!article || !currentUser) {
        return false;
      }
      return currentUser.username === article.author.username;
    })
  );
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$
  });
  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.articlesData = params['slug'];
    });
    this.store.dispatch(articleActions.getArticle({ slug: this.articlesData }));
    this.data$.subscribe((data) => console.log(data.article));
  }
  deleteArticle(){
    this.store.dispatch(articleActions.deleteArticle({slug:this.articlesData}))
  }
}

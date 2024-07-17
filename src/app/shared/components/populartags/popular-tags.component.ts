import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PopularTagsActions } from './store/action';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectData,
} from './store/reducer';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorMessage } from '../messages/errormessages.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-popular-tags',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessage,RouterLink],
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    data: this.store.select(selectData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
  });
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(PopularTagsActions.getPopularTags());
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AddtoFavoritesService } from '../service/addto-favorites.service';
import { Store } from '@ngrx/store';
import { favouritesAction } from './store/action';

@Component({
  selector: 'mc-add-to-favourites',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './add-to-favourites.component.html',
  styleUrl: './add-to-favourites.component.css',
})
export class AddToFavouritesComponent {
  @Input() isFavourited: boolean = false;
  @Input() favouritedCount: number = 0;
  @Input() articleSlug: string = '';
  constructor(private store: Store) {}
 
  handleLike(): void {
    this.store.dispatch(
      favouritesAction.favorites({
        isFavourited: this.isFavourited,
        slug: this.articleSlug,
      })
    );
   console.log("Favour",this.isFavourited);
   

    if (this.isFavourited) {
      this.favouritedCount = this.favouritedCount - 1;
    } else {
      this.favouritedCount = this.favouritedCount + 1;
    }
    this.isFavourited = !this.isFavourited;
    console.log("Favour",this.isFavourited);
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducer';

@Component({
  selector: 'mc-stream-toggler',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './streamtoggler.component.html',
  styleUrl: './streamtoggler.component.css'
})
export class StreamtogglerComponent {
 @Input() tagName?:string;
 currentUser$ = this.store.select(selectCurrentUser)
 constructor(private store:Store){}
}

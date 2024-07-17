import { Component, OnInit } from '@angular/core';
import { appRoutes } from './app.routes'; // Import routes for standalone component
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/components/topBar/topBar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/action';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TopBarComponent,CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
})
export class AppComponent implements OnInit{
  constructor(private store : Store){}
  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
  title = 'realWorld';
}

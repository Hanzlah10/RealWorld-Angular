import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { authFeatureKey, authReducer } from './app/auth/store/reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './app/auth/store/effect'
import * as streamEffects from './app/shared/components/stream/store/effect'
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from './app/shared/services/authInterceptor';
import { streamFeatureKey, streamReducer } from './app/shared/components/stream/store/reducer';
// import { PopularTagsEffects } from ./app/shared/components/populartags/store/effects';
import * as PopularTagsEffects from './app/shared/components/populartags/store/effects'
import * as addToFavoritesEffects from './app/shared/components/addToFavourites/add-to-favourites/store/effects'
import { AddtoFavoritesService } from './app/shared/components/addToFavourites/service/addto-favorites.service';
import { PopularTagsFeatureKey, popularTagsReducer } from './app/shared/components/populartags/store/reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouterStore(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer
    }),
    provideEffects(PopularTagsEffects, authEffects, streamEffects, addToFavoritesEffects),
    provideState(authFeatureKey, authReducer),
    provideState(streamFeatureKey, streamReducer),
    provideState(PopularTagsFeatureKey, popularTagsReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    AddtoFavoritesService,
    provideEffects()
  ],
});

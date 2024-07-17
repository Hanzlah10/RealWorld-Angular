import { Route } from "@angular/router";
import { SettingsComponent } from "./components/settings/settings/settings.component";
import { provideState } from "@ngrx/store";
import { settingsFeatureKey, settingsReducer } from "./store/reducer";

export const settingRoutes :Route[]=[
    {
        path:'',
        component:SettingsComponent,
        providers:[provideState(settingsFeatureKey,settingsReducer)]
    }
]
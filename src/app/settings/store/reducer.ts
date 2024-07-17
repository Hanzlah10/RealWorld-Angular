import { createFeature, createReducer, on } from "@ngrx/store";
import { SettingStateInterface } from "../types/settingState.interface";
import { authActions } from "src/app/auth/store/action";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState :SettingStateInterface ={
    isSubmitting:false,
    validationErrors:null
}
const settingsFeature =createFeature({
    name:'settings',
    reducer:createReducer(

        initialState,
        on(authActions.updateUser,(state) => ({
            ...state,
            isSubmitting:true,
        })),
        on(authActions.updateUserSuccess,(state) => ({
            ...state,
            isSubmitting:false,
        })),
        on(authActions.updateUserFailure,(state,action) => ({
            ...state,
            isSubmitting:true,
            validationErrors:action.errors
        })),
        on(routerNavigationAction => initialState)
    )

})
export const{
    name:settingsFeatureKey,
    reducer:settingsReducer,
    selectValidationErrors,
    selectIsSubmitting
}=settingsFeature
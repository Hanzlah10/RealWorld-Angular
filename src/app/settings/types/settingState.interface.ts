import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"

export interface SettingStateInterface{
    isSubmitting:boolean
    validationErrors:BackendErrorsInterface |null
}
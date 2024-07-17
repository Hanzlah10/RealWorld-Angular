import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"

export interface CreatearticleStateInterface{
    isSubmitting:boolean
    validationErrors:BackendErrorsInterface |null
}
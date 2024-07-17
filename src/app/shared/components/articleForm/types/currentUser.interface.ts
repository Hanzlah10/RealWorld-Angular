import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

export interface CurrentUserRequestInterface{
    user:CurrentUserInterface & {password:string}
}
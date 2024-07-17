import { Component, Input } from "@angular/core";
@Component ({
    selector:'mc-error-message',
    template:'<div>{{message}}</div>',
    standalone:true
})
export class ErrorMessage{
    @Input() message:string = "Something went Wrong"
}
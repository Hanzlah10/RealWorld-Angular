import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/action';
import { RegisterRequestInterface } from '../../types/registerrequest.interface';
import { RouterLink } from '@angular/router';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducer';
import { AuthStateInterface } from '../../types/authState.interface';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { combineLatest } from 'rxjs';
import { BackEndErrormessagesComponent } from '../../../shared/components/back-end-errormessages/back-end-errormessages.component';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackEndErrormessagesComponent,
  ],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  data$ = combineLatest({
    backendError: this.store.select(selectValidationErrors),
  });
  isSubmitting = this.store.selectSignal(selectIsSubmitting);
  constructor(
    private fb: FormBuilder,
    private store: Store<AuthStateInterface>
  ) {}

  onSubmit() {
    this.data$.subscribe((res) => console.log(res));
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    };
    console.log('form', this.form.getRawValue());

    this.store.dispatch(authActions.register({ request }));
  }
}

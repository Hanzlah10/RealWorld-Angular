import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/action';

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
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackEndErrormessagesComponent,
  ],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({

    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendError: this.store.select(selectValidationErrors),
  });
  constructor(
    private fb: FormBuilder,
    private store: Store<AuthStateInterface>,
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request }));
    // this.authService.login(request).subscribe((res) => console.log(res));
  }
}

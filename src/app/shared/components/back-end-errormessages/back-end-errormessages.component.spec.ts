import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndErrormessagesComponent } from './back-end-errormessages.component';

describe('BackEndErrormessagesComponent', () => {
  let component: BackEndErrormessagesComponent;
  let fixture: ComponentFixture<BackEndErrormessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackEndErrormessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackEndErrormessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

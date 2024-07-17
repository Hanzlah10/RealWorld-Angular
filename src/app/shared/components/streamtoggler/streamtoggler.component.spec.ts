import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamtogglerComponent } from './streamtoggler.component';

describe('StreamtogglerComponent', () => {
  let component: StreamtogglerComponent;
  let fixture: ComponentFixture<StreamtogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamtogglerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamtogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

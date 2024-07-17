import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStreamComponent } from './your-stream.component';

describe('YourStreamComponent', () => {
  let component: YourStreamComponent;
  let fixture: ComponentFixture<YourStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourStreamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

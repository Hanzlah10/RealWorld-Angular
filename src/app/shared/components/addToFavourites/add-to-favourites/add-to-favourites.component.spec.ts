import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavouritesComponent } from './add-to-favourites.component';

describe('AddToFavouritesComponent', () => {
  let component: AddToFavouritesComponent;
  let fixture: ComponentFixture<AddToFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToFavouritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEntryCardComponent } from './image-entry-card.component';

describe('ImageEntryCardComponent', () => {
  let component: ImageEntryCardComponent;
  let fixture: ComponentFixture<ImageEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageEntryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

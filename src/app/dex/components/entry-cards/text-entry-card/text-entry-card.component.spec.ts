import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextEntryCardComponent } from './text-entry-card.component';

describe('DexEntrySpecComponent', () => {
  let component: TextEntryCardComponent;
  let fixture: ComponentFixture<TextEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEntryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

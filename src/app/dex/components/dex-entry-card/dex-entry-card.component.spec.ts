import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexEntryCardComponent } from './dex-entry-card.component';

describe('DexEntrySpecComponent', () => {
  let component: DexEntryCardComponent;
  let fixture: ComponentFixture<DexEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexEntryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

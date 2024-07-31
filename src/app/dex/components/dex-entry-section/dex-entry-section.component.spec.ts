import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexEntrySectionComponent } from './dex-entry-section.component';

describe('DexEntrySpecComponent', () => {
  let component: DexEntrySectionComponent;
  let fixture: ComponentFixture<DexEntrySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexEntrySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexEntrySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

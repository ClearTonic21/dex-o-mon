import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexEntryInfoPanelComponent } from './dex-entry-info-panel.component';

describe('DexEntryInfoPanelComponent', () => {
  let component: DexEntryInfoPanelComponent;
  let fixture: ComponentFixture<DexEntryInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexEntryInfoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexEntryInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

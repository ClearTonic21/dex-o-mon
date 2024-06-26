import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexViewPanelComponent } from './dex-view-panel.component';

describe('DexViewPanelComponent', () => {
  let component: DexViewPanelComponent;
  let fixture: ComponentFixture<DexViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexViewPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

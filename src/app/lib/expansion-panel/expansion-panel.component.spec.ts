import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexoExpansionPanelComponent } from './expansion-panel.component';

describe('DexoExpansionPanelComponent', () => {
  let component: DexoExpansionPanelComponent;
  let fixture: ComponentFixture<DexoExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexoExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexoExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexSelectionListComponent } from './dex-selection-list.component';

describe('DexSelectionListComponent', () => {
  let component: DexSelectionListComponent;
  let fixture: ComponentFixture<DexSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexSelectionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

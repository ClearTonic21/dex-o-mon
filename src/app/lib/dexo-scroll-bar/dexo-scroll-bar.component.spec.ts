import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexoNavigationBarComponent } from './dexo-scroll-bar.component';

describe('DexoNavigationBarComponent', () => {
  let component: DexoNavigationBarComponent;
  let fixture: ComponentFixture<DexoNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexoNavigationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexoNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexoFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: DexoFooterComponent;
  let fixture: ComponentFixture<DexoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexoFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

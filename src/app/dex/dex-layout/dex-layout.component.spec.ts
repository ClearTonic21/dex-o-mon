import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexLayoutComponent } from './dex-layout.component';

describe('DexLayoutComponent', () => {
  let component: DexLayoutComponent;
  let fixture: ComponentFixture<DexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

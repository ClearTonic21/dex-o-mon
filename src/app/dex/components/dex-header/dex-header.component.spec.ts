import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexHeaderComponent } from './dex-header.component';

describe('DexHeaderComponent', () => {
  let component: DexHeaderComponent;
  let fixture: ComponentFixture<DexHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexoHeaderComponent } from './header.component';

describe('DexoHeaderComponent', () => {
  let component: DexoHeaderComponent;
  let fixture: ComponentFixture<DexoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexoHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

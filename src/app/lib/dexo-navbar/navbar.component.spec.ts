import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexoNavbarComponent } from './navbar.component';

describe('DexoNavbarComponent', () => {
  let component: DexoNavbarComponent;
  let fixture: ComponentFixture<DexoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexoNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

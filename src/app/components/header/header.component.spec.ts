import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexoToolbarComponent } from './header.component';

describe('DexoNavbarComponent', () => {
  let component: DexoToolbarComponent;
  let fixture: ComponentFixture<DexoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexoToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

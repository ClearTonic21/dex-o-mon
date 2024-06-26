import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDexEntryComponent } from './preview-dex-entry.component';

describe('PreviewDexEntryComponent', () => {
  let component: PreviewDexEntryComponent;
  let fixture: ComponentFixture<PreviewDexEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewDexEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewDexEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

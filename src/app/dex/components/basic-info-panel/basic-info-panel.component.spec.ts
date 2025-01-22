import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoPanelComponent } from './basic-info-panel.component';

describe('DexEntryInfoPanelComponent', () => {
  let component: BasicInfoPanelComponent;
  let fixture: ComponentFixture<BasicInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicInfoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

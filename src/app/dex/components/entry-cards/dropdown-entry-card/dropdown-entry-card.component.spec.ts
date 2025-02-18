import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEntryCardComponent } from './dropdown-entry-card.component';

describe('ListEntryCardComponent', () => {
  let component: DropdownEntryCardComponent;
  let fixture: ComponentFixture<DropdownEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownEntryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

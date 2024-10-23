import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntryCardComponent } from './list-entry-card.component';

describe('ListEntryCardComponent', () => {
  let component: ListEntryCardComponent;
  let fixture: ComponentFixture<ListEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEntryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

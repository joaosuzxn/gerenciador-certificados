import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUi } from './item-ui';

describe('ItemUi', () => {
  let component: ItemUi;
  let fixture: ComponentFixture<ItemUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

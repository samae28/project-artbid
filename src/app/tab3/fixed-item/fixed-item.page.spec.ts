import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FixedItemPage } from './fixed-item.page';

describe('FixedItemPage', () => {
  let component: FixedItemPage;
  let fixture: ComponentFixture<FixedItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FixedItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

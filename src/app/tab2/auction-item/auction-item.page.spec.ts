import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionItemPage } from './auction-item.page';

describe('AuctionItemPage', () => {
  let component: AuctionItemPage;
  let fixture: ComponentFixture<AuctionItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuctionItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

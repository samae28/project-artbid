import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSeeallauctionPage } from './modal-seeallauction.page';

describe('ModalSeeallauctionPage', () => {
  let component: ModalSeeallauctionPage;
  let fixture: ComponentFixture<ModalSeeallauctionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalSeeallauctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

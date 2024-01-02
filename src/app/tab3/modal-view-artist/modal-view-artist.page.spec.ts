import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalViewArtistPage } from './modal-view-artist.page';

describe('ModalViewArtistPage', () => {
  let component: ModalViewArtistPage;
  let fixture: ComponentFixture<ModalViewArtistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalViewArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

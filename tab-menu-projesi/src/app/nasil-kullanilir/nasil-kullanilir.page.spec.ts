import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasilKullanilirPage } from './nasil-kullanilir.page';

describe('NasilKullanilirPage', () => {
  let component: NasilKullanilirPage;
  let fixture: ComponentFixture<NasilKullanilirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NasilKullanilirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

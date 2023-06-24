import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Soru1Page } from './soru1.page';

describe('Soru1Page', () => {
  let component: Soru1Page;
  let fixture: ComponentFixture<Soru1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Soru1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

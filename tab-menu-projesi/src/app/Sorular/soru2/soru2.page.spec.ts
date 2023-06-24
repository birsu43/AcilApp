import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Soru2Page } from './soru2.page';

describe('Soru2Page', () => {
  let component: Soru2Page;
  let fixture: ComponentFixture<Soru2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Soru2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

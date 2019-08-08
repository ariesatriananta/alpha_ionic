import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaPage } from './ava.page';

describe('AvaPage', () => {
  let component: AvaPage;
  let fixture: ComponentFixture<AvaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

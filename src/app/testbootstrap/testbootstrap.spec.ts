import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testbootstrap } from './testbootstrap';

describe('Testbootstrap', () => {
  let component: Testbootstrap;
  let fixture: ComponentFixture<Testbootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testbootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testbootstrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

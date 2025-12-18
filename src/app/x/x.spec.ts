import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X } from './x';

describe('X', () => {
  let component: X;
  let fixture: ComponentFixture<X>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [X]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

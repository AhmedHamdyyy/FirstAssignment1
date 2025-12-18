import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullstack } from './fullstack';

describe('Fullstack', () => {
  let component: Fullstack;
  let fixture: ComponentFixture<Fullstack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fullstack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fullstack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

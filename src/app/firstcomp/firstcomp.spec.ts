import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstcomp } from './firstcomp';

describe('Firstcomp', () => {
  let component: Firstcomp;
  let fixture: ComponentFixture<Firstcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Firstcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Firstcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

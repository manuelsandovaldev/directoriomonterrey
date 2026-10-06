import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavegation } from './bar-navegation';

describe('BarNavegation', () => {
  let component: BarNavegation;
  let fixture: ComponentFixture<BarNavegation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarNavegation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNavegation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

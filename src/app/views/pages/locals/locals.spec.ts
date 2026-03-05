import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locals } from './locals';

describe('Locals', () => {
  let component: Locals;
  let fixture: ComponentFixture<Locals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Locals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Locals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

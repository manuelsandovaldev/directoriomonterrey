import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contac } from './contac';

describe('Contac', () => {
  let component: Contac;
  let fixture: ComponentFixture<Contac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

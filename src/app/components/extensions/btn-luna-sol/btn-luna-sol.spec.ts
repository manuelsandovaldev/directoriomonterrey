import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLunaSol } from './btn-luna-sol';

describe('BtnLunaSol', () => {
  let component: BtnLunaSol;
  let fixture: ComponentFixture<BtnLunaSol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLunaSol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLunaSol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

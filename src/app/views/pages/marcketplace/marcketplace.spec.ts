import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcketplace } from './marcketplace';

describe('Marcketplace', () => {
  let component: Marcketplace;
  let fixture: ComponentFixture<Marcketplace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marcketplace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marcketplace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

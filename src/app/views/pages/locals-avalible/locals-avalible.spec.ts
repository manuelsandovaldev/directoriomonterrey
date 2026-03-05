import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalsAvalible } from './locals-avalible';

describe('LocalsAvalible', () => {
  let component: LocalsAvalible;
  let fixture: ComponentFixture<LocalsAvalible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalsAvalible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalsAvalible);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sugestoes } from './sugestoes';

describe('Sugestoes', () => {
  let component: Sugestoes;
  let fixture: ComponentFixture<Sugestoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sugestoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sugestoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

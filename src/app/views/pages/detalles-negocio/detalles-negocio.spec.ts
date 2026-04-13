import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesNegocio } from './detalles-negocio';

describe('DetallesNegocio', () => {
  let component: DetallesNegocio;
  let fixture: ComponentFixture<DetallesNegocio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesNegocio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesNegocio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
